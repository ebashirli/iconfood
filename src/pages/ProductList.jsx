import ProductCard from "../components/ProductCards/ProductCard";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/reducers/products/productThunk";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

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
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductCards;
