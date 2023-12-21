import ProductCard from "../components/ProductCards/ProductCard";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/reducers/products/productThunk";
import { useEffect } from "react";
import Spinner from "./Spinner";

import styles from "./ProductList.module.scss";
import { useMediaQuery } from "react-responsive";

function ProductList({ columnCount = 3 }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const { pathname } = useLocation();
  const isProduct = pathname === "/products";
  const dispatch = useDispatch();
  const { products, status, limit } = useSelector((state) => state.product);
  console.log();
  useEffect(() => {
    dispatch(fetchAllProducts({ limit: isProduct ? null : limit }));
  }, [dispatch, isProduct, limit]);

  if (status === "pending") return <Spinner />;
  return (
    <ul
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${isDesktop ? columnCount : 1}, 1fr)`,
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
