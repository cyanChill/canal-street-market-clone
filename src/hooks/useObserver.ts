import { useState, useEffect, useRef, useCallback } from "react";

type optionsType = {
  root: any;
  rootMargin: string;
  threshold: number | number[];
};

type entriesType = IntersectionObserverEntry[];

/*
  Example Options:
  { root: null, rootMargin: "0px", threshold: 0.5 }
*/

const useObserver = <T extends HTMLElement>(options: optionsType) => {
  const containerRef = useRef<T | null>(null);

  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  const callbackFunc = useCallback(
    (entries: entriesType) => {
      /* To prevent false "isSeen" values */
      if (!init) {
        setInit(true);
        return;
      }

      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !isSeen) setIsSeen(true);
    },
    [init, isSeen]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // eslint-disable-next-line
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options, callbackFunc]);

  return { containerRef, isVisible, isSeen };
};

export default useObserver;
