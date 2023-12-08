/* eslint-disable react/prop-types */
import styles from "./MenuCard.module.scss";

function MenuCard({ title, items }) {
  return (
    <div className={styles.menuCard}>
      <h6 className={styles.h6}>{title}</h6>
      <div className={styles.items}>
        {items.map((item) => (
          <a href="#" key={item} className={styles.item}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
