import { createContext, useState, useEffect } from "react";

import { ProviderInterface } from "./contextTypes";

const ResizeContext = createContext({
  isMobile: false,
});

const ResizeProvider = ({ children }: ProviderInterface) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (e: Event) => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizeContext.Provider value={{ isMobile }}>
      {children}
    </ResizeContext.Provider>
  );
};

export default ResizeContext;
export { ResizeProvider };
