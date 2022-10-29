import React from "react";

import styles from "./About.module.css";
import { HomeEvents } from "../data";
import useTransitionContext from "../hooks/useTransitionContext";
import useObserver from "../hooks/useObserver";
import EventList from "../components/events/EventList";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  const { nextRoute } = useTransitionContext();

  const { containerRef: heroRef, isSeen: heroSeen } =
    useObserver<HTMLImageElement>({
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
  const { containerRef: mkt1Ref, isSeen: mkt1Seen } =
    useObserver<HTMLImageElement>({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
  const { containerRef: mkt2Ref, isSeen: mkt2Seen } =
    useObserver<HTMLImageElement>({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
  const { containerRef: mkt3Ref, isSeen: mkt3Seen } =
    useObserver<HTMLImageElement>({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headingText}>
        Canal Street Market is a carefully curated retail market, food hall &
        community space open year-round at 265 Canal Street.{" "}
        <span className={`underlineAnim ${styles.mockLink}`}>
          Support Small Business
        </span>{" "}
        this weekend!
      </h1>

      <img
        src="/assets/hero.jpg"
        alt=""
        className={`${styles.hero} ${heroSeen ? styles.visible : ""}`}
        ref={heroRef}
      />

      {/* Market Info */}
      <h2
        className={`${styles.headingText} ${styles.secondaryHeading}`}
        style={{ "--font-size": "8em" } as React.CSSProperties}
      >
        A New Kind of Market
      </h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src="/assets/home_page_1.jpg"
            alt=""
            ref={mkt1Ref}
            className={`${styles.cardImg} ${mkt1Seen ? styles.visible : ""}`}
          />
          <p>
            Merging retail, food, art, and culture, Canal Street Market
            highlights top retail and design concepts, restaurants, and
            up-and-coming players in the downtown New York City community.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="/assets/home_page_2.jpg"
            alt=""
            ref={mkt2Ref}
            className={`${styles.cardImg} ${mkt2Seen ? styles.visible : ""}`}
          />
          <p>
            Retail Market Hours:
            <br />
            Fri - Sun: 11:00AM - 7:00PM
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="/assets/home_page_3.jpg"
            alt=""
            ref={mkt3Ref}
            className={`${styles.cardImg} ${mkt3Seen ? styles.visible : ""}`}
          />
          <p>
            Food Hall Hours:
            <br />
            Mon - Thurs: 11:00AM - 6:00PM
            <br />
            Fri - Sun: 11:00AM - 7:00PM
          </p>
        </div>
      </div>

      {/* Events stuff */}
      <div className={styles.eventsHeading}>
        <span>活動</span>
        <span>Market Events</span>
        <span>活動</span>
      </div>
      <EventList events={HomeEvents} />

      {/* Canal St. Market Location */}
      <div className={styles.locationContainer}>
        <div className={`hoverBorder ${styles.locationTxt}`}>
          <span>265 Canal St. New York, NY</span>
        </div>
        <div className={`hoverBorder ${styles.locationImg}`}>
          <img src="/assets/location_map.jpg" alt="" />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
