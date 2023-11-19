import Button from "../Button";
import ProductCard from "./ProductCard";
import styles from "./ProductCards.module.scss";

const products = [
  {
    id: 1,
    title: "Crunchy Crust",
    link: "$",
    linkName: "Baguette",
  },
  {
    id: 2,
    title: "Crescent Roll",
    link: "$",
    linkName: "Brioche",
  },
  {
    id: 3,
    title: "Round Rye",
    link: "$",
    linkName: "Brioche",
  },
  {
    id: 4,
    title: "Crunchy Crust",
    link: "$",
    linkName: "Sourdough",
  },
  {
    id: 5,
    title: "Bun Roll",
    link: "$",
    linkName: "Sourdough",
  },
];

function ProductCards() {
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
