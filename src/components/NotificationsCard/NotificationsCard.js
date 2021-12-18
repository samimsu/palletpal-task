import styles from "./NotificationsCard.module.css";

const NotificationsCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Notifications</h2>
      <ul>
        <li className={styles.notification}>
          <div className={styles.content}>
            <h3>Profile Completion</h3>
            <p>
              In order to be able to process your shipment requests without any
              hurdle, we will require you to complete your profile
            </p>
          </div>
          <button className={styles.button}>View Profile</button>
        </li>
        <li className={(styles.notification, styles.alternateNotification)}>
          <div className={styles.content}>
            <h3>Manage Subscription</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptatibus corrupti atque repudiandae nam.
            </p>
          </div>
          <button className={styles.button}>Change plan</button>
        </li>
      </ul>
    </div>
  );
};

export default NotificationsCard;
