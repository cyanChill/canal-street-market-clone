/* Page Template for Food & Retail Pages */

import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import styles from "./InfoPageTemplate.module.css";
import { InfoPageDataType, TimeSlot } from "../util/types";
import Footer from "../components/footer/Footer";

interface InfoPageTemplateProps {
  pageName: { short: string; english: string; chinese: string };
  pageImg: string;
  hours: TimeSlot[];
  hero: { primaryText: string; subText: string };
  HeroSVG: React.ElementType;
  data: InfoPageDataType[];
}

const InfoPageTemplate = ({
  pageName,
  pageImg,
  hours,
  hero,
  HeroSVG,
  data,
}: InfoPageTemplateProps) => {
  const [prevImgQueue, setPrevImgQueue] = useState("");
  const [prevImg, setPrevImg] = useState("");
  const [show, setShow] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const updatePrevImg = (imgPath: string) => {
    setPrevImgQueue(imgPath);
    setInProgress(true);
  };

  const hideImgPrev = () => {
    setShow(false);
    setInProgress(false);
  };

  useEffect(() => {
    if (!inProgress) return;

    const timer = setTimeout(() => {
      setShow(true);
      setPrevImg(prevImgQueue);
      setInProgress(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [prevImgQueue, inProgress]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.tabLabel}>
          {pageName.short} <HiOutlineArrowNarrowRight />
        </p>
        <p className={styles.hours}>
          {pageName.english} Hours:
          {hours.map((hour) => (
            <>
              <br />
              {hour.startDay} - {hour.endDay}: {hour.startTime} - {hour.endTime}
            </>
          ))}
        </p>
        <h1>The {pageName.english}</h1>
        <img src={pageImg} alt="" />
        <p className={styles.chinese}>{pageName.chinese}</p>
      </header>

      <div className={styles.list}>
        <div
          style={{ backgroundImage: `url(${prevImg})` } as React.CSSProperties}
          className={`${styles.previewImg} ${show ? styles.show : ""}`}
        />

        {data.map((entry) => {
          return (
            <div
              key={entry.id}
              onMouseEnter={() => updatePrevImg(entry.previewImgPath)}
              onMouseLeave={hideImgPrev}
              className={styles.list_entry}
            >
              <p className={styles.list_entry_subText}>{entry.subText}</p>
              <p className={styles.list_entry_primaryText}>
                {entry.primaryText}
              </p>
            </div>
          );
        })}
      </div>

      <div className={`underlineAnim_top_bot ${styles.hero}`}>
        <HeroSVG className={`bounce ${styles.hero_svg}`} />
        <div className={styles.hero_text}>
          <p className={styles.hero_primaryText}>{hero.primaryText}</p>
          <p className={styles.hero_subText}>{hero.subText}</p>
        </div>
        <HeroSVG
          style={{ "--direction": -1, rotate: "180deg" } as React.CSSProperties}
          className={`bounce ${styles.hero_svg}`}
        />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default InfoPageTemplate;
