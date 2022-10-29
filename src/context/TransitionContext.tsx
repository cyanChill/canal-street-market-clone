import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ProviderInterface } from "./contextTypes";
import { TimerType } from "../util/types";
import { SiteTabs } from "../data";

const TransitionContext = createContext({
  inProgress: false,
  currTabIdx: 0,
  currRoute: "",
  nextRoute: (routeIdx: number) => {},
});

const TransitionProvider = ({ children }: ProviderInterface) => {
  const location = useLocation();
  const navigate = useNavigate();

  let timerRef = useRef<TimerType>();
  const [inProgress, setInProgress] = useState(true);
  const [currTabIdx, setCurrTabIdx] = useState(
    SiteTabs.findIndex((tab) => `/${tab.route}` === location.pathname)
  );
  const [currRoute, setCurrRoute] = useState(location.pathname ?? "/");
  const [canSwitch, setCanSwitch] = useState(false);

  const nextRoute = (routeIdx: number) => {
    if (!canSwitch) return;

    setCurrRoute(`/${SiteTabs[routeIdx].route}`);
    setInProgress(true);

    clearTimeout(timerRef.current); // Debounce timer
    timerRef.current = setTimeout(() => {
      navigate(SiteTabs[routeIdx].route);
      // Make sure we're at the top of the page when we switch pages
      window.scrollTo(0, 0);
      setCurrTabIdx(routeIdx);
      document.body.style.backgroundColor = SiteTabs[routeIdx].color;
    }, 500);
  };

  useEffect(() => {
    setCanSwitch(false);
    const timeout = setTimeout(() => {
      setInProgress(false);
      setCanSwitch(true);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return (
    <TransitionContext.Provider
      value={{ inProgress, currTabIdx, currRoute, nextRoute }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
export { TransitionProvider };
