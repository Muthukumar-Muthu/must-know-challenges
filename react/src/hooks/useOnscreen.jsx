import { useEffect, useState } from "react";

export default function useOnScreen(target) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  function IntersectionObserverCallback(entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);

      setIsIntersecting(entry.isIntersecting);
    });
  }
  const observer = new IntersectionObserver(IntersectionObserverCallback);

  useEffect(() => {
    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}
