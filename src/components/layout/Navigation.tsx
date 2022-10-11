import styles from "./Navigation.module.css";
import { SiteTabs } from "../../data";
import NavTab from "./NavTab";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navigation */}
      <nav className={styles.mobileNavContainer}></nav>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNavContainer}>
        {SiteTabs.map((tab, idx) => (
          <NavTab idx={idx} />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
