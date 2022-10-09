import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ProviderInterface } from "./contextTypes";

const TransitionContext = createContext({
  inProgress: false,
  currRoute: "",
  nextRoute: (route: string) => {},
});

const TransitionProvider = ({ children }: ProviderInterface) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [inProgress, setInProgress] = useState(true);
  const [currRoute, setCurrRoute] = useState(location.pathname ?? "/");

  const nextRoute = useCallback((route: string) => {
    setCurrRoute(route);
    setInProgress(true);
    navigate(route);
  }, []);

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
