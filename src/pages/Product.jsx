import styles from "./Product.module.scss";
import Clients from "../components/Clients/Clients";
import ProductList from "../ui/ProductList";
import { Link } from "react-router-dom";

function Product() {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <div className={styles.router}>
          <h4>
            <span>
              <Link to="/">Home</Link>
            </span>
            <span> &gt; </span>
            <span>Shop</span>
          </h4>
        </div>
        <ProductList columnCount={4} />
      </main>
      <Clients />
    </section>
  );
}

export default Product;
