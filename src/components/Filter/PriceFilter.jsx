import Button from "../Button";
import styles from "./PriceFilter.module.scss";

function PriceFilter() {
  return (
    <div className={styles.container}>
      <h5>Filter By Price</h5>
      <input type="range" className={styles.slider} min="0" max="1000" />
      <div className={styles.prices}>
        <input type="number" placeholder="0" />
        <input type="number" placeholder="1000" />
      </div>
      <Button className={styles.button}>
        <h6>Filter</h6>
      </Button>
    </div>
  );
}

export default PriceFilter;
