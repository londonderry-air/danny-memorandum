import { useEffect, useState } from "react";

const useMediaQuery = (limit = 640): boolean => {
  const [isMQ, setMQ] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setMQ(window.innerWidth <= limit);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMQ;
};

export default useMediaQuery;
