import React from "react";

import styles from "./About.module.css";
import { HomePageCards, HomeEvents } from "../data";
import useObserver from "../hooks/useObserver";

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headingText}>
        Canal Street Market is a carefully curated retail market, food hall &
        community space open year-round at 265 Canal Street.{" "}
        <span className={styles.mockLink}>Support Small Business</span> this
        weekend!
      </h1>

      <img src="/assets/hero.jpg" alt="" className={styles.hero} />

      <h2
        className={`${styles.headingText} ${styles.secondaryHeading}`}
        style={{ "--font-size": "8em" } as React.CSSProperties}
      >
        A New Kind of Market
      </h2>

      <div className={styles.cardsContainer}>
        {HomePageCards.map((info) => (
          <div key={info.id} className={styles.card}>
            <img src={info.image} alt="" />
            <p dangerouslySetInnerHTML={{ __html: info.description }}></p>
          </div>
        ))}
      </div>

      <div className={styles.eventsHeading}>
        <span>活動</span>
        <span>Market Events</span>
        <span>活動</span>
      </div>

      <div className={styles.eventList}>
        {HomeEvents.map((event) => (
          <p className={styles.event}>
            {event.date}
            <br />
            {event.description}
          </p>
        ))}

        <button className={`btn ${styles.eventBtn}`}>see all</button>
      </div>
    </div>
  );
};

export default AboutPage;
