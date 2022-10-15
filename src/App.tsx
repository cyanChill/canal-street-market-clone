import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import { SiteTabs } from "./data";
import useTransitionContext from "./hooks/useTransitionContext";
import useResizeContext from "./hooks/useResizeContext";
import Navigation from "./components/layout/Navigation";
import AboutPage from "./pages/About";

const App = () => {
  const { inProgress, currTabIdx } = useTransitionContext();
  const { isMobile } = useResizeContext();

  const [initialLoad, setInitalLoad] = useState(false);

  useEffect(() => {
    const initLoadDur = isMobile ? 500 : 2500;
    const timer = setTimeout(() => {
      setInitalLoad(true);
    }, initLoadDur);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <img src="/assets/logo.png" alt="" className={styles.logo} />

      <Navigation />

      <main
        style={
          {
            "--content-shift": `${64 + currTabIdx * 53}px`,
            "--right-padding": `${(SiteTabs.length - 1 - currTabIdx) * 53}px`,
          } as React.CSSProperties
        }
        className={`${styles.tabContent} ${
          !inProgress && initialLoad ? styles.show : ""
        } ${isMobile ? styles.mobile : ""}`}
      >
        <Routes>
          <Route path="food" element={<div>Tab Content 2</div>} />
          <Route path="retail" element={<div>Tab Content 3</div>} />
          <Route path="community" element={<div>Tab Content 4</div>} />
          <Route path="*" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
