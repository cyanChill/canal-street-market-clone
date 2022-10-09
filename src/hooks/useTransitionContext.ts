import { useContext } from "react";

import TransitionContext from "../context/TransitionContext";

const useTransitionContext = () => {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "useTransitionContext must be used inside TransitionContextProvider."
    );
  }

  return context;
};

export default useTransitionContext;
