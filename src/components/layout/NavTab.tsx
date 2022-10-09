import React, { useState, useEffect } from "react";

import styles from "./NavTab.module.css";
import useTransitionContext from "../../hooks/useTransitionContext";

interface NavTabProps {
  color: string;
  first?: boolean;
  name?: { english: string; chinese: string };
  delay?: string;
}

const NavTab = ({
  color,
  first,
  name = { english: "", chinese: "" },
  delay,
}: NavTabProps) => {
  const { currRoute, inProgress, nextRoute } = useTransitionContext();
  const [init, setInit] = useState(false);

  const tabStyles = { "--tab-clr": color, "--delay": delay };
  const isActive = currRoute === `/${name.english}`;

  useEffect(() => {
    setInit(true);

    if (isActive) {
      document.body.style.backgroundColor = color;
    }
  }, []);

  const selectRoute = () => {
    nextRoute(`/${name.english}`);
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
