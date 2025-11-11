import { useEffect, useRef, type ReactElement } from "react";
import Card from "./Card";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import Navbar from "./Navbar";
import useFetch from "./hooks/useFetch";
import "./types/twitter";

export default function MainContent({
  navbarTitle,
  isShared,
  data,
  loading,
}: {
  navbarTitle: string;
  isShared: boolean;
  data: [] | undefined;
  loading: boolean;
}) {
  // const { data, loading } = useFetch(contentDataUrl);
  const twitterLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (
      (data?.length || 0) > 0 &&
      window.twttr &&
      window.twttr.widgets &&
      !twitterLoadedRef.current
    ) {
      console.log(data);
      window.twttr.widgets.load();
      twitterLoadedRef.current = true;
    }
  }, [data]);

  return (
    <div className="flex-1 p-10 ml-72">
      <Navbar isShared={isShared} navbarTitle={navbarTitle} />
      <div className="mt-10 flex gap-10 flex-wrap">
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
