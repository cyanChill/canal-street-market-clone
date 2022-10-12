import React, { useState, useEffect, useRef } from "react";

import styles from "./MobileNavTab.module.css";
import { TimerType } from "../../util/types";
import { SiteTabs } from "../../data";
import useTransitionContext from "../../hooks/useTransitionContext";
import FadeIn from "../animation/FadeIn";

interface MobileNavTabProps {
  idx: number;
  visible: boolean;
  handleNavState: (isOpen: boolean) => void;
}

const MobileNavTab = ({ idx, visible, handleNavState }: MobileNavTabProps) => {
  const { currRoute, nextRoute } = useTransitionContext();

  let timerRef = useRef<TimerType>();
  const [opening, setOpening] = useState(false);

  const { color, first, name, delay, rotation, scaleOrigin } = SiteTabs[idx];
  const tabStyles = {
    "--tab-clr": color,
    "--rotation": rotation,
    "--scale-origin": scaleOrigin,
  };
  const isActive = first ? currRoute === `/` : currRoute === `/${name.english}`;

  const selectRoute = () => {
    if (!isActive) {
      setOpening(true);
      nextRoute(idx);

      timerRef.current = setTimeout(() => {
        handleNavState(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (!visible) {
      setOpening(false);
      clearTimeout(timerRef.current);
    }
  }, [visible]);

  return (
    <FadeIn
      duration={"250ms"}
      delay={delay.mobile}
      visible={visible}
      style={{ zIndex: opening ? 1 : 0 }}
    >
      <div
        style={tabStyles as React.CSSProperties}
        className={`${styles.wrapper} ${opening ? styles.opening : ""}`}
        onClick={selectRoute}
      >
        <span className={styles.tabLabel}>{name?.english}</span>
      </div>
    </FadeIn>
  );
};

export default MobileNavTab;
