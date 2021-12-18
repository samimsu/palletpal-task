import styles from "./FreightCard.module.css";

const FreightCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>What The Freight?</h2>
      <ul>
        <li className={styles.notification}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3>Gloria Robertson</h3>
              <span className={styles.badge}>New</span>
              <span className={styles.date}>1d ago</span>
            </div>
            <p>Velit placeat sit ducimus non sed</p>
            <p>
              Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in
              a rerum natus facere. Enim reru...
            </p>
          </div>
        </li>
        <li className={(styles.notification, styles.alternateNotification)}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3>Gloria Robertson</h3>
              <span className={styles.badge}>New</span>
              <span className={styles.date}>1d ago</span>
            </div>
            <p>Velit placeat sit ducimus non sed</p>
            <p>
              Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in
              a rerum natus facere. Enim reru...
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FreightCard;
