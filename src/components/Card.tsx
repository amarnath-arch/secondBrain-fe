import type { ReactElement } from "react";
import ShareIcon from "./icons/ShareIcon";
import DeleteIcon from "./icons/DeleteIcon";

interface CardProps {
  icon: ReactElement;
  title: string;
  shareLink: string;
  type: "youtube" | "tweet";
}

export default function Card({ icon, title, shareLink, type }: CardProps) {
  return (
    <div className="min-w-fit max-h-fit bg-white shadow-xl border-[1px] border-slate-100 border-solid rounded-xl p-4 hover:-translate-y-1 transition-transform duration:300 hover:shadow-secondary hover:scale-102">
      <div className="flex justify-between items-center w-full text-slate-700">
        <div className="flex gap-2 items-center basis-4/5">
          <div>{icon}</div>
          <span className="ml-2">{title}</span>
        </div>
        <div className="flex items-center gap-2 basis-1/5 ml-auto">
          <a
            href={shareLink}
            target="_blank"
            className="hover:scale-110  hover:bg-secondary p-2 rounded-full"
          >
            <ShareIcon size="md" />
          </a>
          <div className="hover:scale-110 cursor-pointer hover:bg-secondary p-2 rounded-full">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5 overflow-hidden max-h-fit h-full">
        {type == "youtube" && (
          <iframe
            src={shareLink.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full rounded-xl"
          ></iframe>
        )}
        {type == "tweet" && (
          <div className="h-fit">
            <blockquote className="twitter-tweet">
              <a href={shareLink.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
