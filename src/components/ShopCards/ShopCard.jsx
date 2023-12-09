import Button from "../Button";
import styles from "./ShopCard.module.scss";
import PropTypes from "prop-types";

function ShopCard({ img }) {
  return (
    <div className={`${styles.card} ${styles["card" + img]}`}>
      <img
        src={`shop-cards/${img}.jfif`}
        alt={`${img} image`}
        className={styles.img}
      />
      <div className={styles.cover}>
        <h4 className={styles.title}>Top Product Of the Week</h4>
        <Button className={styles.button}>explore items</Button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  img: PropTypes.node,
};

export default ShopCard;
