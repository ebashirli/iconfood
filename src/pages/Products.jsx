import styles from "./Product.module.scss";
import Clients from "../components/Clients/Clients";
import ProductList from "./ProductList";
import Button from "../components/Button";

function Products() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={`${styles.topCards} ${styles["topCards-1"]}`}>
          <div>
            <h3>Ends Today</h3>
            <h2>Brioche</h2>
            <a href="#">Explore Items</a>
          </div>
          <img src="imgs/products/t1.png" alt="" />
        </div>
        <div className={`${styles.topCards} ${styles["topCards-2"]}`}>
          <div>
            <h3>Your Space</h3>
            <h2>Sourdough</h2>
            <a href="#">Explore Items</a>
          </div>
          <img src="imgs/products/t2.png" alt="" />
        </div>

        <h3>Shop</h3>
        <h4>
          <span>Home</span>
          <span> &gt; </span>
          <span>Shop</span>
        </h4>
      </header>
      <main className={styles.main}>
        <aside>
          <h5>Filter :</h5>
          <input type="search" />
          <input type="range" />
          <input type="number" placeholder="0" />
          <input type="number" placeholder="1000" />
          <Button />
        </aside>
        <ProductList />
      </main>
      <Clients />
    </section>
  );
}

export default Products;
