import { useState, useRef } from "react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

import styles from "./Navigation.module.css";
import { TimerType } from "../../util/types";
import { SiteTabs } from "../../data";
import DesktopNavTab from "./DesktopNavTab";
import MobileNavTab from "./MobileNavTab";
import FadeIn from "../animation/FadeIn";

const Navigation = () => {
  let mobileNavRef = useRef<HTMLDivElement | null>(null);
  let timerRef = useRef<TimerType>();
  const [navOpen, setNavOpen] = useState(false);
  const [tabVisible, setTabVisible] = useState(false);

  const toggleNavMenu = () => {
    // Used for opening/closing nav menu (no additional action)
    setNavOpen((prev) => {
      if (prev === false) document.body.setAttribute("data-locked", "true");
      else document.body.setAttribute("data-locked", "false");

      return !prev;
    });
    setTabVisible((prev) => !prev);
  };

  const setNavMenuState = (isOpen: boolean) => {
    // Used for when we're going to switch routes
    setNavOpen(isOpen);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTabVisible(false);
    }, 500);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={`${styles.mobileNavContainer} ${navOpen ? styles.show : ""}`}
        ref={mobileNavRef}
      >
        <div
          className={`${styles.mobileNavControl} ${navOpen ? styles.open : ""}`}
        >
          <img
            src="/assets/close.svg"
            alt=""
            className={`${styles.navControl} ${navOpen ? styles.show : ""}`}
            onClick={toggleNavMenu}
          />
          <img
            src="/assets/menu.svg"
            alt=""
            className={`${styles.navControl} ${!navOpen ? styles.show : ""}`}
            onClick={toggleNavMenu}
          />
        </div>

        <div
          className={`${styles.mobileNavContent} ${
            !navOpen ? styles.hidden : ""
          }`}
        >
          <div className={styles.mobileTabs}>
            {SiteTabs.map((tab, idx) => (
              <MobileNavTab
                key={tab.name.english}
                idx={idx}
                visible={tabVisible}
                handleNavState={setNavMenuState}
              />
            ))}
          </div>

          <FadeIn duration={"250ms"} delay={"600ms"} visible={tabVisible}>
            <div className={styles.info}>
              <button className="btn">become a vendor</button>
              <p>
                256 Canal Street
                <br />
                New York, New York
              </p>
              <p>
                Food Hall Hours:
                <br />
                Mon - Sun: 10AM - 10PM
              </p>
              <p>
                Retail Market Hours:
                <br />
                Mon - Sat: 11AM - 7PM
                <br />
                Sun: 11AM - 6PM
              </p>

              <a href="##">Email us</a>

              <div className={styles.linksContainer}>
                <button className="btn">
                  <SlSocialFacebook />
                </button>
                <button className="btn">
                  <SlSocialInstagram />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNavContainer}>
        {SiteTabs.map((tab, idx) => (
          <DesktopNavTab key={tab.name.english} idx={idx} />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
