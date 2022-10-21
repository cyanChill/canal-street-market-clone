import React from "react";

import styles from "./Community.module.css";
import { Community } from "../data";
import Footer from "../components/footer/Footer";

const CommunityPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Canal St. Community</h1>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
