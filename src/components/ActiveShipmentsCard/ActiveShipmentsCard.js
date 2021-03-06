import { Link } from "react-router-dom";
import styles from "./ActiveShipmentsCard.module.css";

const ActiveShipmentsCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h2 className={styles.heading}>Active Shipments</h2>
        <Link to="/shipment-overview">
          <button className={styles.button}>Shipment Overview</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>SHIPMENT NAME</td>
            <td>SHIPMENT ID</td>
            <td>STATUS</td>
            <td>ORIGIN</td>
            <td>DESTINATION</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.shipmentName}>
              Fall Men's Collection Shipment
            </td>
            <td>A001</td>
            <td>Quote Pending</td>
            <td>Shanghai, China</td>
            <td>Dubai, United Arab Emirates</td>
          </tr>
          <tr>
            <td className={styles.shipmentName}>
              Raw Cotton Material - Vietnam
            </td>
            <td>S001</td>
            <td>At Destination</td>
            <td>Hanoi, Vietnam</td>
            <td>Dammam, Saudi Arabia</td>
          </tr>
          <tr>
            <td className={styles.shipmentName}>Zara Men's 2021 Fall Order</td>
            <td>A002</td>
            <td>Ready for Pickup</td>
            <td>Barcelona, Spain</td>
            <td>Karachi, Pakistan</td>
          </tr>
          <tr>
            <td className={styles.shipmentName}>
              Mussimo Dutti Men's 2021 Fall...
            </td>
            <td>A003</td>
            <td>At Origin Airport</td>
            <td>Cairo, Egypt</td>
            <td>Rome, Italy</td>
          </tr>
          <tr>
            <td className={styles.shipmentName}>Raw Cotton Materia - Egypt</td>
            <td>S002</td>
            <td>Quote Pending</td>
            <td>Cairo, Egypt</td>
            <td>Rome, Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveShipmentsCard;
