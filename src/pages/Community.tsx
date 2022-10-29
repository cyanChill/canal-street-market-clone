import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import styles from "./Community.module.css";
import { ReactComponent as MindSVG } from "../assets/Mind.svg";
import { CommunityPodcasts, Community } from "../data";
import EventList from "../components/events/EventList";
import Footer from "../components/footer/Footer";

const CommunityPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.tabLabel}>
          Community <HiOutlineArrowNarrowRight />
        </p>
        <p className={styles.subHeadText}>
          Our mixed-use space hosts
          <br />
          ongoing events, podcasts
          <br />
          & artists in residence
          <br />
          <span className={styles.chinese}>文化</span>
        </p>
        <h1>Canal St. Community</h1>
      </header>

      <div className={`underlineAnim_top ${styles.hero}`}>
        <MindSVG className={`bounce ${styles.hero_svg}`} />
        <div className={styles.hero_text}>
          <p className={styles.hero_primaryText}>Market Radio</p>
          <p className={styles.hero_subText}>Podcasted from the market</p>
        </div>
        <MindSVG
          style={{ "--direction": -1, rotate: "180deg" } as React.CSSProperties}
          className={`bounce ${styles.hero_svg}`}
        />
      </div>

      <EventList events={CommunityPodcasts} btnColor="var(--orange)" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
