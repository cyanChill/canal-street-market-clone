import React, { useState, useEffect } from "react";

import styles from "./Food.module.css";
import { FoodVendors } from "../data";
import { ReactComponent as SmileySVG } from "../assets/SmileyFace.svg";
import Footer from "../components/footer/Footer";

const FoodPage = () => {
  const [prevImgQueue, setPrevImgQueue] = useState("");
  const [foodPrevImg, setFoodPrevImg] = useState("");
  const [show, setShow] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const updateFoodPrevImg = (id: string) => {
    const vendorInfo = FoodVendors.find((entry) => entry.id === id);
    if (vendorInfo) {
      setPrevImgQueue(vendorInfo.previewImg);
      setInProgress(true);
    }
  };

  const hideFoodPrev = () => {
    setShow(false);
    setInProgress(false);
  };

  useEffect(() => {
    if (!inProgress) return;

    const timer = setTimeout(() => {
      setShow(true);
      setFoodPrevImg(prevImgQueue);
      setInProgress(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [prevImgQueue, inProgress]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.hours}>
          Food Hall Hours:
          <br />
          Mon - Thurs: 11:00AM - 6:00PM
          <br />
          Fri - Sun: 11:00AM - 7:00PM
        </p>
        <h1>The Food Hall</h1>
        <img src="/assets/home_page_3.jpg" alt="" />
        <p className={styles.ctgyChinese}>餐饮</p>
      </header>

      <div className={styles.vendors}>
        <div
          style={
            {
              backgroundImage: `url(${foodPrevImg})`,
            } as React.CSSProperties
          }
          className={`${styles.previewImg} ${show ? styles.show : ""}`}
        />

        {FoodVendors.map((vendor) => {
          return (
            <div
              key={vendor.id}
              onMouseEnter={() => updateFoodPrevImg(vendor.id)}
              onMouseLeave={hideFoodPrev}
              className={styles.vendor}
            >
              <p>{vendor.summary}</p>
              <p>{vendor.company}</p>
            </div>
          );
        })}
      </div>

      <div className={`${styles.happyHours}`}>
        <SmileySVG className={styles.smiley} />
        <div className={styles.happyHours_text}>
          <p>Happy Hours</p>
          <p>Every Weekday, 5 - 7PM $4 Beer & $7 Wine Come Hang With Us!</p>
        </div>
        <SmileySVG
          style={
            {
              "--start-direction": "25%",
              rotate: "180deg",
            } as React.CSSProperties
          }
          className={styles.smiley}
        />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default FoodPage;
