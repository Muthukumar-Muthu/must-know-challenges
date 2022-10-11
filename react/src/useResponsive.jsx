import { useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";

const initalState = { isMobile: false, isTablet: false, isDesktop: false };

export default function useResponsive() {
  const [device, setDevice] = useState(initalState);
  const debouncedListener = useRef(useDebounce(resizeListener, 1000));
  useEffect(() => {
    debouncedListener.current();
    window.addEventListener("resize", debouncedListener.current);
    return () =>
      window.removeEventListener("resize", debouncedListener.current);
  }, []);
  function resizeListener() {
    const width = window.innerWidth;
    console.log(width);
    if (width <= 480) {
      setDevice(() => ({ isTablet: false, isDesktop: false, isMobile: true }));
    } else if (width >= 480 && width <= 990) {
      setDevice(() => ({ isTablet: true, isDesktop: false, isMobile: false }));
    } else if (width > 990) {
      setDevice(() => ({ isTablet: false, isDesktop: true, isMobile: false }));
    } else throw new Error("No suitable device found");
  }
  return device;
}
