import React, { useState, useEffect } from "react";

import styles from "./FadeIn.module.css";

interface FadeInInterface {
  duration: string;
  delay: string;
  visible: boolean;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const FadeIn = ({
  duration,
  delay,
  visible,
  style,
  className = "",
  children,
}: FadeInInterface) => {
  const [initAnimState, setInitAnimState] = useState(false);

  useEffect(() => {
    if (!visible) setInitAnimState(false);
    else setInitAnimState(true);
  }, [visible]);

  return (
    <div
      style={
        {
          "--delay": delay,
          "--duration": duration,
          ...style,
        } as React.CSSProperties
      }
      className={`${styles.wrapper} ${
        initAnimState ? styles.init : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default FadeIn;
