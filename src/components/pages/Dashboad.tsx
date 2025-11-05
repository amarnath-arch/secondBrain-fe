import MainContent from "../MainContent";
import Sidebar from "../Sidebar";
import Modal from "../ui/Modal";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-50 ">
      <Sidebar />
      <MainContent />
    </div>
  );
}
