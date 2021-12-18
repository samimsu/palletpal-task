import styles from "./Topbar.module.css";
import searchIcon from "../../assets/search-icon.svg";
import bellIcon from "../../assets/bell-icon.svg";
import avatar from "../../assets/avatar.svg";
import chevronDown from "../../assets/chevron-down.svg";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <img src={searchIcon} width="16" height="16" />
      <input className={styles.input} placeholder="Search"></input>
      <img src={bellIcon} width="16" height="16" />
      <img src={avatar} width="32" height="32" />
      <div className={styles.tooltip}>
        <img src={chevronDown} width="8" height="8" />
        <ul className={styles.tooltiptext}>
          <a href="">
            <li className={styles.listItem}>Company Profile</li>
          </a>
          <a href="">
            <li className={styles.listItem}>Your Profile</li>
          </a>
          <a href="">
            <li className={styles.listItem}>Sign out</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
