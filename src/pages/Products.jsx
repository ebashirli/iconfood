import styles from "./Product.module.scss";
import Clients from "../components/Clients/Clients";
import ProductList from "../ui/ProductList";
import ViewControl from "../components/ViewControl";
import Pagination from "../components/Pagination";
import FilterContainer from "../components/Filter/FilterContainer";

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
        <FilterContainer />
        <ViewControl />
        <ProductList />
        <Pagination />
      </main>
      <Clients />
    </section>
  );
}

export default Products;
