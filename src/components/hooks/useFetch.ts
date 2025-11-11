import { useEffect, useState } from "react";
import axios from "axios";

interface fetchResponse {
  contents: [];
  username?: string;
}

export default function useFetch(url: string) {
  const [data, setData] = useState<fetchResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  async function refresh(isInitial: boolean) {
    // alert("refresh");
    if (isInitial) setLoading(true);
    const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${backendBaseUrl}${url}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    if (data != response.data) {
      setData(response?.data);
    }
    if (isInitial) setLoading(false);
  }

  useEffect(() => {
    refresh(true);
    let intervalId = setInterval(() => refresh(false), 20000);
    return () => {
      clearInterval(intervalId);
    };
  }, [url]);

  return { data, loading };
}
