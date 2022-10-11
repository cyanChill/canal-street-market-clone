import React, { useState, useEffect } from "react";

import styles from "./NavTab.module.css";
import { SiteTabs } from "../../data";
import useTransitionContext from "../../hooks/useTransitionContext";

interface NavTabProps {
  idx: number;
}

const NavTab = ({ idx }: NavTabProps) => {
  const { currRoute, nextRoute } = useTransitionContext();
  const [init, setInit] = useState(false);

  const { color, first, name, delay } = SiteTabs[idx];

  const tabStyles = { "--tab-clr": color, "--delay": delay };
  const isActive = currRoute === `/${name.english}`;

  useEffect(() => {
    setInit(true);
    if (isActive) document.body.style.backgroundColor = color;
  }, []);

  const selectRoute = () => {
    nextRoute(idx);
  };

  return (
    <div
      style={tabStyles as React.CSSProperties}
      className={`${styles.wrapper} ${first ? styles.first : ""} ${
        init ? styles.init : ""
      } ${isActive ? styles.active : ""}`}
    >
      <div className={styles.tabLabel} onClick={selectRoute}>
        <p>{name?.chinese}</p>
        <span>{name?.english}</span>
      </div>
    </div>
  );
};

export default NavTab;
