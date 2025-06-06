import { cn } from "@/lib/utils";
import Celebrate from "@/public/celebrate.png";
import Glad from "@/public/glad.png";
import Smile from "@/public/smile.png";
import Wink from "@/public/wink.png";
import Work from "@/public/work.png";
import React from "react";
import { AppImage } from "./app-image";

export const TrustBadge: React.FC = () => {
  const avatars = [
    { src: Celebrate, bgClassName: "bg-red-300", alt: "celebrate memoji" },
    { src: Wink, bgClassName: "bg-yellow-300", alt: "wink memoji" },
    { src: Smile, bgClassName: "bg-blue-300", alt: "smile memoji" },
    { src: Glad, bgClassName: "bg-green-300", alt: "glad memoji" },
    { src: Work, alt: "work memoji" },
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex -space-x-2">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-xs font-medium select-none",
              avatar.bgClassName,
            )}
            aria-label={avatar.alt}
            title={avatar.alt}
          >
            <div className="relative h-full w-full">
              <AppImage
                src={avatar.src}
                alt={avatar.alt}
                className={"h-full w-full rounded-full object-cover"}
              />
            </div>
          </div>
        ))}
      </div>
      <small className="flex items-center gap-1 text-sm leading-none font-medium text-gray-600">
        <b>100+ clients</b>{" "}
        <span className="font-light">trust our services</span>
      </small>
    </div>
  );
};
