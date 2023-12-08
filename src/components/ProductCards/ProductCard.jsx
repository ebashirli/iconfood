import styles from "./ProductCard.module.scss";

function ProductCard({ id, title, link, linkName }) {
  return (
    <div className={styles.card}>
      <img
        src={`product-cards/${id}.png`}
        alt={`${id} image`}
        className={styles.img}
      />
      <div className={styles.info}>
        <h5 className={styles.title}>{title}</h5>
        <a href={link} className={styles.link}>
          {linkName}
        </a>
        <h5 className={styles.price}>
          <span className={styles.old}>$16.48</span>
          <span className={styles.new}>$6.48</span>
        </h5>
      </div>
    </div>
  );
}

export default ProductCard;
