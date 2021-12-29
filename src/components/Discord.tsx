import { useEffect, useMemo, useState } from 'react'

import { discordId, Presence } from '../types/types'
import { EventType, Operation, SocketEvent } from '../types/event'
import { config } from '../utils/config'
const Discord = ({
  setActive,
}: { setActive: (active: boolean) => void } & any) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [doing, setDoing] = useState<Presence>()
  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }))
  }

  useEffect(() => {
    if (socket === null) return () => {}

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data)

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        )
        send(Operation.Initialize, {
          subscribe_to_id: discordId,
        })
      } else if (op === Operation.Event && t) {
        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence)
      }
    }

    socket.onclose = () => {
      setSocket(null)
    }
  }, [socket])
  useEffect(() => {
    if (!socket) setSocket(new WebSocket('wss://api.lanyard.rest/socket'))
  }, [socket])

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  )

  useEffect(() => {
    setActive(currentActivity)
  }, [currentActivity])

  if (!doing || !doing?.discord_status) return null

  const name = currentActivity?.name?.replace('Code', 'Visual Studio Code')
  const replaced =
    currentActivity?.state?.replace('📁 ', '')?.split(' | ')?.[0] ||
    'a file'.replace(`📁 ${[0]}.tsx`, `${[0]}`)
  return (
    <>
      <div className="flex items-center sticky bottom-0 bg-neutral-200 dark:bg-neutral-900 bg-opacity-20 dark:bg-opacity-20 rounded-2xl p-4 w-80 animate-scaleCenter">
        <div className="grid items-center justify-center">
          {currentActivity ? (
            <>
              <div className="animate-scaleCenter">
                <div className="flex items-center space-x-4 text-neutral-700 rounded-md dark:text-neutral-300">
                  {currentActivity?.name == 'Fortnite' &&
                  currentActivity.assets ? (
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${currentActivity?.application_id}/858011444276494356.png`}
                      className="flex-shrink-0 w-16 h-16 rounded-2xl"
                    />
                  ) : (
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${currentActivity?.application_id}/${currentActivity?.assets?.large_image}.png`}
                      className="flex-shrink-0 w-16 h-16 rounded-2xl"
                    />
                  )}
                  <div className="text-sm leading-tight truncate">
                    {currentActivity ? (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-black text-black dark:text-white">
                              {name}
                            </span>
                          </div>
                          {currentActivity.state ? (
                            <span className="text-black dark:text-white">
                              {replaced}
                            </span>
                          ) : null}
                          {currentActivity?.name ==
                            config.game.title.hearthstone && (
                            <span className="text-black dark:text-white">
                              {currentActivity?.details}
                            </span>
                          )}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-4 text-neutral-700 rounded-md dark:text-neutral-300 animate-scaleCenter">
                <div className="w-16 h-16 rounded-2xl bg-blue-900">
                  <div className="flex my-4 mx-4 z-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 flex justify-center z-50 flex-shrink-0 stroke-current text-blue-800"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        transform="translate(2 1.5)"
                      >
                        <polyline points="5.245 13.281 8.238 9.391 11.652 12.073 14.581 8.293" />
                        <circle cx="17.995" cy="2.7" r="1.922" />
                        <path d="M12.9244852,1.62013731 L5.6567506,1.62013731 C2.64530894,1.62013731 0.778032041,3.75286043 0.778032041,6.76430209 L0.778032041,14.846682 C0.778032041,17.8581237 2.60869567,19.9816935 5.6567506,19.9816935 L14.2608696,19.9816935 C17.2723113,19.9816935 19.1395882,17.8581237 19.1395882,14.846682 L19.1395882,7.80778036" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-sm leading-tight truncate">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-black text-black dark:text-white">
                        Activity
                      </span>
                    </div>

                    <span className="text-black dark:text-white">
                      I have no activity
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default Discord
