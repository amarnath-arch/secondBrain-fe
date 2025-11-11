import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import MainContent from "../MainContent";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";

export default function PublicShare() {
  const { shareId } = useParams();
  const { data, loading } = useFetch(`/api/v1/user/brain/${shareId}`);

  //   alert("hello");

  //   useEffect(() => {
  //     data.map((datael) => {
  //       return
  //     });
  //   }, [data]);

  return (
    <div className="flex bg-slate-50 fixed -z-10 inset-0">
      <Sidebar />
      <MainContent
        navbarTitle={`${data?.username}'s Notes`}
        isShared={true}
        data={data?.contents || undefined}
        loading={loading}
      />
    </div>
  );
}
