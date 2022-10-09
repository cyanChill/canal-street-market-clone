import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import useTransitionContext from "./hooks/useTransitionContext";
import NavTab from "./components/layout/NavTab";

const App = () => {
  const { inProgress } = useTransitionContext();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="" />
      </div>

      <nav className={styles.navContainer}>
        <NavTab color="var(--white)" first delay="450ms" />

        <NavTab
          color="var(--blue)"
          name={{ english: "food", chinese: "餐饮" }}
          delay="300ms"
        />

        <NavTab
          color="var(--red)"
          name={{ english: "retail", chinese: "購物" }}
          delay="150ms"
        />

        <NavTab
          color="var(--orange)"
          name={{ english: "community", chinese: "文化" }}
        />
      </nav>

      <main
        className={`${styles.tabContent} ${!inProgress ? styles.show : ""}`}
      >
        <Routes>
          <Route path="food" element={<div>Tab Content 2</div>} />
          <Route path="retail" element={<div>Tab Content 3</div>} />
          <Route path="community" element={<div>Tab Content 4</div>} />
          <Route path="*" element={<div>Tab Content 1</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
