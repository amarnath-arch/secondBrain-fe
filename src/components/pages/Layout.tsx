import type React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex bg-slate-50 fixed -z-10 inset-0">
      <Sidebar />
      <Outlet />
    </div>
  );
}
