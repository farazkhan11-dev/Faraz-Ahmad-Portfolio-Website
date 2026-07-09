import { useEffect, useState } from "react";

let useIsMobile = (breakPoint = 640) => {
  const [IsMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakPoint);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakPoint]);
  return IsMobile;
};
export default useIsMobile;