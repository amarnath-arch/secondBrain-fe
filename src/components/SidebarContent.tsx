import type { ReactElement } from "react";

interface sidebarContentProps {
  icon: ReactElement;
  title: string;
}

export default function SidebarContent({ icon, title }: sidebarContentProps) {
  return (
    <div className="flex font-medium items-center gap-4 p-5 text-slate-700 hover:bg-secondary hover:text-button-text rounded-xl hover:-translate-y-0.5 transition:transform duration:300 ease-in-out cursor-pointer">
      {icon}
      <div className="text-lg">{title}</div>
    </div>
  );
}
