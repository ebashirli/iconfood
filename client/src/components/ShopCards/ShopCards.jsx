import ShopCard from "./ShopCard";
import styles from "./ShopCards.module.scss";

function ShopCards() {
  return (
    <div className={styles.cards}>
      {[1, 2, 3].map((el) => (
        <ShopCard key={el} img={el} />
      ))}
    </div>
  );
}

export default ShopCards;
