import styles from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Topbar />
        <div className={styles.cardsContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
