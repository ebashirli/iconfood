import { useSelector, useDispatch } from "react-redux";
import styles from "./Product.module.scss";
import Clients from "../components/Clients/Clients";
import { fetchAllProducts } from "../store/reducers/products/productThunk";
import { useEffect } from "react";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products.data.data);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <div>
            <h3>Ends Today</h3>
            <h2>Brioche</h2>
            <a>Explore Items</a>
          </div>
          <img src="/products/t1.png" alt="" />
        </div>
        <div>
          <div>
            <h3>Your Space</h3>
            <h2>Sourdough</h2>
            <a>Explore Items</a>
          </div>
          <img src="/products/t2.png" alt="" />
        </div>
      </header>
      <div>
        <aside>Aside</aside>
        <main>
          {products.data.data.map((product) => (
            <li key={product.id}>
              <img src={product.imageUrl} alt="" />
            </li>
          ))}
        </main>
      </div>
      <Clients />
    </section>
  );
}

export default Products;
