import { useState, useEffect, useRef } from "react";

type optionsType = {
  root: any;
  rootMargin: string;
  threshold: number | number[];
};

type entriesType = IntersectionObserverEntry[];

const DEFAULT_OPTIONS: optionsType = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const useObserver = (options = DEFAULT_OPTIONS) => {
  const containerRef = useRef<HTMLElement>();

  const [isVisible, setIsVisible] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  const callbackFunc = (entries: entriesType) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting && !isSeen) setIsSeen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible, isSeen };
};

export default useObserver;
