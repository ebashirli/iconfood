import styles from "./FeatureCard.module.scss";

function FeatureCard({ icon, title, info }) {
  return (
    <div className={styles.card}>
      <img src={`features/${icon}`} alt="" />
      <h6 className={styles.h6}>{title}</h6>
      <p className={styles.p}>{info}</p>
    </div>
  );
}

export default FeatureCard;
