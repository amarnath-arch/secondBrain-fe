import { useEffect, useState } from "react";
import axios from "axios";

interface useFetchProps {
  url: string;
}

export default function useFetch(url: string) {
  const [data, setData] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);

  async function refresh() {
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${backendBaseUrl}${url}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    if (data != response.data.contents) {
      setData(response?.data?.contents);
    }
  }

  useEffect(() => {
    refresh();
    let intervalId = setInterval(refresh, 20000);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);

  return { data, loading };
}
