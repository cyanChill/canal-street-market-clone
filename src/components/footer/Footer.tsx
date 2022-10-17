import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SlPencil, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.vendor}>
        <h2>Interested in becoming a vendor?</h2>
        <button className={`btn ${styles.vendorBtn}`}>click here</button>
      </div>

      <div className={styles.socials}>
        <a
          href="mailto:info@canalstreet.market"
          className={`hoverBorder ${styles.socialItem}`}
        >
          <SlPencil />
          <span>Email us</span>
        </a>
        <a
          href="https://www.facebook.com/canalstreetmarket"
          className={`hoverBorder ${styles.socialItem}`}
        >
          <SlSocialFacebook />
          <span>Follow us on facebook</span>
        </a>
        <a
          href="https://www.instagram.com/canalstreetmarket/"
          className={`hoverBorder ${styles.socialItem}`}
        >
          <SlSocialInstagram />
          <span>Follow us on instagram</span>
        </a>
      </div>

      <div className={`hoverBorder ${styles.newsletter}`}>
        <span>Stay up to date with our newsletter</span>
        <form className={styles.emailForm}>
          <input type="email" placeholder="Email" />
          <button type="submit" className={styles.submit}>
            <HiOutlineArrowNarrowRight />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
