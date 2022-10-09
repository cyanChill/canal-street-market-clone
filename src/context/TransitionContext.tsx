import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ProviderInterface } from "./contextTypes";
import { TimerType } from "../util/types";

const TransitionContext = createContext({
  inProgress: false,
  currRoute: "",
  nextRoute: (route: string) => {},
});

const TransitionProvider = ({ children }: ProviderInterface) => {
  const location = useLocation();
  const navigate = useNavigate();

  let timerRef = useRef<TimerType>();
  const [inProgress, setInProgress] = useState(true);
  const [currRoute, setCurrRoute] = useState(location.pathname ?? "/");

  const nextRoute = (route: string) => {
    setCurrRoute(route);
    setInProgress(true);

    clearTimeout(timerRef.current); // Debounce timer
    timerRef.current = setTimeout(() => {
      navigate(route);
    }, 500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInProgress(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return (
    <TransitionContext.Provider value={{ inProgress, currRoute, nextRoute }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
export { TransitionProvider };
