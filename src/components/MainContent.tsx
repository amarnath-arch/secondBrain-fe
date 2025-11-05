import { useEffect, type ReactElement } from "react";
import Card from "./Card";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import Navbar from "./Navbar";
import useFetch from "./hooks/useFetch";

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

  const { data, loading } = useFetch("/api/v1/user/content");

  useEffect(() => {
    if ((data?.length || 0) > 0) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="flex-1 p-10 ml-72">
      <Navbar />
      <div className="mt-10 flex gap-10 flex-wrap">
        {/* {CardContent.map(({ title, icon, shareLink, type }) => (
          <Card title={title} icon={icon} shareLink={shareLink} type={type} />
        ))} */}
        {loading
          ? "...loading"
          : data?.map(({ title, link, type }, index) => (
              <Card
                key={index}
                title={title}
                icon={type == "youtube" ? <YoutubeIcon /> : <TwitterIcon />}
                shareLink={link}
                type={type}
              />
            ))}
      </div>
    </div>
  );
}
