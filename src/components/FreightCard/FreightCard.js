import styles from "./FreightCard.module.css";

const FreightCard = () => {
  return (
    <div className={styles.card}>
      <h2>What The Freight?</h2>
      <ul>
        <li className={styles.notification}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3>Gloria Robertson</h3>
              <span className={styles.badge}>New</span>
              <span className={styles.date}>1d ago</span>
            </div>
            <p>hello world</p>
            <p>
              In order to be able to process your shipment requests without any
              hurdle, we will require you to complete your profile
            </p>
          </div>
        </li>
        <li className={(styles.notification, styles.alternateNotification)}>
          <div className={styles.content}>
            <h3>Gloria Robertson</h3>
            <p>hello world</p>
            <p>
              Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit
              amet ipsum dolor sit amet.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FreightCard;
