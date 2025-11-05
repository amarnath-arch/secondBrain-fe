import BulbIcon from "./icons/BulbIcon";
import DocumentIcon from "./icons/DocumentIcon";
import HomeIcon from "./icons/HomeIcon";
import LinkIcon from "./icons/LinkIcon";
import TagsIcon from "./icons/TagsIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const sidebarContents = [
    {
      icon: <TwitterIcon />,
      title: "Tweets",
    },
    {
      icon: <YoutubeIcon />,
      title: "Videos",
    },
    {
      icon: <DocumentIcon />,
      title: "Documents",
    },
    {
      icon: <LinkIcon />,
      title: "Links",
    },
    {
      icon: <TagsIcon />,
      title: "Tags",
    },
  ];

  return (
    <div className="w-72 h-screen shadow-xl border-r-slate-100 border-r-[1px] border-solid p-3 py-4 fixed top-0 left-0 bg-white">
      <div className="flex gap-3 items-center mb-5">
        <BulbIcon size="lg" />
        <h1 className="text-2xl font-semibold">Second Brain</h1>
      </div>
      {sidebarContents.map((content, index) => (
        <SidebarContent
          icon={content.icon}
          title={content.title}
          key={`title ${index}`}
        />
      ))}
    </div>
  );
}
