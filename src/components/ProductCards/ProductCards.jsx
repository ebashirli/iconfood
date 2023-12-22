import Button from "../Button";
import ProductList from "../../components/ProductList";
import styles from "./ProductCards.module.scss";

import { useDispatch } from "react-redux";
import { setLimit } from "../../store/reducers/products";

function ProductCards() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setLimit());
  }

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.h3}>bestseller products</h3>

        <p className={styles.p}>
          Problems trying to resolve the conflict between
        </p>
      </header>
      <ProductList columnCount={5} />
      <Button className={styles.button} onClick={handleClick}>
        load more products
      </Button>
    </div>
  );
}

export default ProductCards;
