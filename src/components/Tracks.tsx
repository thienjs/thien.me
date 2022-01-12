import useSWR from "swr";
import {fetcher} from "~/lib/fetcher";
import { TopTracks } from "../types/types";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  return (
    <>
      {data ? (
        <>
          {data.tracks.map((track, index) => (
            <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 space-y-2 rounded-2xl inline">
              <div className="flex flex-col pl-3">
                <div className="inline-flex space-x-2">
                  <div className="flex flex-col mt-2 truncate">
                    <a
                      className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                      href={track.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1 text-cyan-500 font-light">
                        {track.ranking && `#${track.ranking}   `}
                      </span>
                      {track.title}
                    </a>
                    <p
                      className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                      color="gray.500"
                    >
                      {track.artist}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-50 p-2 rounded-2xl inline animate-scaleCenter">
            <div className="flex flex-col pl-3">
              <div className="inline-flex space-x-2">
                <img
                  src="/static/images/default.png"
                  title="Unknown Album"
                  className="w-20 rounded-xl"
                />
                <div className="flex flex-col mt-2 truncate">
                  <a
                    className="font-medium text-neutral-900 dark:text-neutral-100 truncate w-60 sm:w-96 md:w-full"
                    href="https://open.spotify.com/track/5Z9ZqQZqQZqQZqQZqQZqQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1 text-yellow-400 font-light">#1</span>
                    Unknown Song
                  </a>
                  <p
                    className="text-neutral-800 dark:text-neutral-200 mb-4 truncate w-60 sm:w-96 md:w-full"
                    color="gray.500"
                  >
                    Unknown Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
