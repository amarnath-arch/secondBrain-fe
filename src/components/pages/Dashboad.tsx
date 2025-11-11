import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import MainContent from "../MainContent";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

interface dashboardfetchedData {
  contents: [];
}

export default function Dashboard() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const { data, loading } = useFetch("/api/v1/user/content");

  return (
    <div className="flex bg-slate-50 fixed -z-10 inset-0">
      {/* <Sidebar /> */}
      <MainContent
        navbarTitle="All Notes"
        isShared={false}
        data={data?.contents}
        loading={loading}
      />
    </div>
  );
}
