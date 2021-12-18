import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import menuButton from "../../assets/menu-button.png";
import dashboardIcon from "../../assets/dashboard-icon.png";
import newShipmentIcon from "../../assets/new-shipment-icon.png";
import shipmentOverviewIcon from "../../assets/shipment-overview-icon.png";
import trackingAndAnalyticsIcon from "../../assets/tracking-and-analytics-icon.png";
import billingAndInvoicesIcon from "../../assets/billing-and-invoices-icon.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.menuIcon} src={menuButton} alt="menu button" />
      </div>
      <ul>
        <li className={styles.active}>
          <img
            className={styles.icon}
            src={dashboardIcon}
            alt="dashboard icon"
            width="18"
            height="18"
          />
          Dashboard
        </li>
        <li>
          <img
            className={styles.icon}
            src={newShipmentIcon}
            alt="new shipment icon"
            width="18"
            height="18"
          />
          New Shipment
        </li>
        <li>
          <img
            className={styles.icon}
            src={shipmentOverviewIcon}
            alt="shipment overview icon"
            width="18"
            height="18"
          />
          Shipment Overview
        </li>
        <li>
          <img
            className={styles.icon}
            src={trackingAndAnalyticsIcon}
            alt="tracking and analytics icon"
            width="18"
            height="18"
          />
          Tracking &amp; Analytics
        </li>
        <li>
          <img
            className={styles.icon}
            src={billingAndInvoicesIcon}
            alt=" billing and invoices icon"
            width="18"
            height="18"
          />
          Billing &amp; Invoices
        </li>
        <li>
          <img
            className={styles.icon}
            src={billingAndInvoicesIcon}
            alt="reports icon"
            width="18"
            height="18"
          />
          Reports
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
