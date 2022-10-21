import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import { SiteTabs } from "./data";
import useTransitionContext from "./hooks/useTransitionContext";
import useResizeContext from "./hooks/useResizeContext";
import Navigation from "./components/layout/Navigation";
import AboutPage from "./pages/About";
import FoodPage from "./pages/Food";
import RetailPage from "./pages/Retail";
import CommunityPage from "./pages/Community";

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
  }, []); // eslint-disable-line

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
          <Route path="food" element={<FoodPage />} />
          <Route path="retail" element={<RetailPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="*" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
