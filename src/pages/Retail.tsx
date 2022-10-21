import React from "react";

import styles from "./Retail.module.css";
import { Retailers } from "../data";
import Footer from "../components/footer/Footer";

const RetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>The Retail Market</h1>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default RetailPage;
