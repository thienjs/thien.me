"use client";

import { useLanyardWS } from "use-lanyard";
import { useEffect, useState } from "react";
import Age from "./age";

export default function Lanyard() {
  const DISCORD_ID = "251889136120758294";
  const data = useLanyardWS(DISCORD_ID);

  const getStatusTextAndColor = () => {
    if (!data || !data.discord_status) {
      return { statusText: "Loading...", dotColor: "bg-gray-400" };
    }

    const discordStatus = data.discord_status;
    let statusText, dotColor;

    switch (discordStatus) {
      case "idle":
        statusText = "Idle";
        dotColor = "bg-yellow-300";
        break;
      case "online":
        statusText = "Online";
        dotColor = "bg-green-500";
        break;
      case "dnd":
        statusText = "Do Not Disturb";
        dotColor = "bg-red-500";
        break;
      default:
        statusText = "Unknown Status";
        dotColor = "bg-gray-400";
        break;
    }

    return { statusText, dotColor };
  };

  const [newyorkTime, setNewyorkTime] = useState("0:00:00 ?? GMT+10");

  useEffect(() => {
    const getCurrentTimeInNewyork = () => {
      const newyorkTimezone = "America/New_York";
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: newyorkTimezone,
        timeStyle: "long",
        hour12: true,
      });
      const currentTime = formatter.format(new Date());
      setNewyorkTime(currentTime);
    };

    const interval = setInterval(getCurrentTimeInNewyork, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="justify-between space-y-4 font-mono md:flex md:space-y-0">
      <div className="text-muted-foreground text-sm">
        {/*
        
        <div className="flex gap-2">
          <div
            className={`w-3 h-3 animate-pulse rounded-full my-auto ${
              getStatusTextAndColor().dotColor
            }`}
          />
          <p className="my-auto">{getStatusTextAndColor().statusText}</p>
        </div>
        */}
        <p>
          <Age /> y/o Web Developer
        </p>
        <p>{newyorkTime}</p>
        <p>27.4705° S, 153.0260° E</p>
      </div>
      <div className="my-auto">
        {data?.activities?.map((activity) => {
          if (activity.name !== 'Spotify') {
            const largeImageSplit =
              activity?.assets?.large_image?.split('/https/')[1]
            const smallImageSplit =
              activity?.assets?.small_image?.split('/https/')[1]

            return (
              <div
                key={activity.id}
                className="text-muted-foreground flex gap-4 text-sm"
              >
                <div className="relative aspect-square h-[60px] w-[60px]">
                  <img
                    src={`https://${largeImageSplit}` || ''}
                    width={60}
                    height={60}
                    className="aspect-square h-[60px] w-[60px] rounded-lg border-2"
                    alt="Activity Large Image"
                  />
                  <img
                    src={`https://${smallImageSplit}` || ''}
                    width={30}
                    height={30}
                    className="absolute -bottom-2 -right-2 aspect-square h-[30px] w-[30px] rounded-full border-2 border-black"
                    alt="Activity Large Image"
                  />
                </div>
                <div className="my-auto">
                  <p className="line-clamp-1 overflow-hidden text-ellipsis">
                    {activity.name}
                  </p>
                  <p className="line-clamp-1 overflow-hidden text-ellipsis">
                    {activity.details}
                  </p>
                  <p className="line-clamp-1 overflow-hidden text-ellipsis">
                    {activity.state}
                  </p>
                </div>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}