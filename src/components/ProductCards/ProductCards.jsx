import Button from "../Button";
import ProductCard from "./ProductCard";
import styles from "./ProductCards.module.scss";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/reducers/products/productThunk";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";

function ProductCards() {
  const { pathname } = useLocation();
  const isProduct = pathname === "/product";
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchAllProducts({ limit: isProduct ? null : 10 }));
  }, [dispatch, isProduct]);

  if (status === "pending") return <Spinner />;

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.h3}>bestseller products</h3>

        <p className={styles.p}>
          Problems trying to resolve the conflict between
        </p>
      </header>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button className={styles.button}>load more products</Button>
    </div>
  );
}

export default ProductCards;
