import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 48em)");

    const handler = ({ matches }) => {
      setIsMobile(matches);
    };

    handler(mediaQueryList);

    mediaQueryList.addEventListener("change", handler);

    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
