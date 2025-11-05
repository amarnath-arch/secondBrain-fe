import type { ReactElement } from "react";
import Card from "./Card";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import Navbar from "./Navbar";

export default function MainContent() {
  const CardContent: {
    icon: ReactElement;
    title: string;
    shareLink: string;
    type: "youtube" | "twitter";
  }[] = [
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=K-ssUVyfn5g",
      type: "youtube",
    },
    {
      title: "Hiring Blockchain Developers",
      icon: <TwitterIcon />,
      shareLink: "https://x.com/hrishibhat/status/1985302147316269119",
      type: "twitter",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=fXyRprdoEoE",
      type: "youtube",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=K-ssUVyfn5g",
      type: "youtube",
    },
    {
      title: "Hiring Blockchain Developers",
      icon: <TwitterIcon />,
      shareLink: "https://x.com/hrishibhat/status/1985302147316269119",
      type: "twitter",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=fXyRprdoEoE",
      type: "youtube",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=K-ssUVyfn5g",
      type: "youtube",
    },
    {
      title: "Hiring Blockchain Developers",
      icon: <TwitterIcon />,
      shareLink: "https://x.com/hrishibhat/status/1985302147316269119",
      type: "twitter",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=fXyRprdoEoE",
      type: "youtube",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=K-ssUVyfn5g",
      type: "youtube",
    },
    {
      title: "Hiring Blockchain Developers",
      icon: <TwitterIcon />,
      shareLink: "https://x.com/hrishibhat/status/1985302147316269119",
      type: "twitter",
    },
    {
      title: "How to Build a Second Brain",
      icon: <YoutubeIcon />,
      shareLink: "https://www.youtube.com/watch?v=fXyRprdoEoE",
      type: "youtube",
    },
  ];

  return (
    <div className="flex-1 p-10 ml-72">
      <Navbar />
      <div className="mt-10 flex gap-10 flex-wrap">
        {CardContent.map(({ title, icon, shareLink, type }) => (
          <Card title={title} icon={icon} shareLink={shareLink} type={type} />
        ))}
      </div>
    </div>
  );
}
