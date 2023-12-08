import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";

const cards = [
  {
    id: 1,
    icon: "bx_bxs-book-reader.svg",
    title: "Easy Wins",
    info: "Get your best looking smile now!",
  },
  {
    id: 2,
    icon: "carbon_book.svg",
    title: "Concrete",
    info: "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    id: 3,
    icon: "uil_arrow-growth.svg",
    title: "Hack Growth",
    info: "Overcame any hurdle or any other problem.",
  },
];

function Features() {
  return (
    <div className={styles.features}>
      <header className={styles.header}>
        <h4 className={styles.h4}>Featured Products</h4>
        <h3>THE BEST SERVICES</h3>
        <p className={styles.p}>
          Problems trying to resolve the conflict between
        </p>
      </header>
      <div className={styles.cards}>
        {cards.map((card) => (
          <FeatureCard {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Features;
