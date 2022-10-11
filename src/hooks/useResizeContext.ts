import { useContext } from "react";

import ResizeContext from "../context/ResizeContext";

const useResizeContext = () => {
  const context = useContext(ResizeContext);

  if (!context) {
    throw new Error(
      "useResizeContext must be used inside ResizeContextProvider."
    );
  }

  return context;
};

export default useResizeContext;