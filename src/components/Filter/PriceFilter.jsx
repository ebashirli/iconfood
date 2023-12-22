import Button from "../Button";
import styles from "./PriceFilter.module.scss";
import { setPrice } from "../../store/reducers/products";
import { useDispatch } from "react-redux";

function PriceFilter() {
  const dispatch = useDispatch();

  function handleSetMin(e) {
    console.log(typeof e.target.value);
    dispatch(setPrice(+e.target.value));
  }
  function handleSetMax(e) {
    console.log(typeof e.target.value);
    dispatch(setPrice(+e.target.value));
  }

  return (
    <div className={styles.container}>
      <h5>Filter By Price</h5>
      <input type="range" className={styles.slider} min="0" max="1000" />
      <div className={styles.prices}>
        <input type="number" placeholder="0" onChange={handleSetMin} />
        <input type="number" placeholder="1000" onChange={handleSetMax} />
      </div>
      <Button className={styles.button}>
        <h6>Filter</h6>
      </Button>
    </div>
  );
}

export default PriceFilter;
