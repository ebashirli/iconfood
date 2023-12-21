import styles from "./ProductCard.module.scss";
import { useLocation } from "react-router-dom";

function ProductCard({
  title,
  price = "$ 16.48",
  discountPrice = "$ 6.48",
  reviewCount,
  imageUrl,
  rating,
  category,
  id,
}) {
  const { pathname } = useLocation();
  const isProduct = pathname === "/products";
  return (
    <div className={styles.card}>
      <div>
        <img
          src={imageUrl ? imageUrl : `/imgs/product-cards/${id}.png`}
          alt={`${title} image`}
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <h5 className={styles.title}>{title}</h5>
        <a href={"link"} className={styles.link}>
          {category.title}
        </a>
        <h5 className={styles.price}>
          <span className={styles.old}>${price}</span>
          <span className={styles.new}>${discountPrice}</span>
        </h5>
        {isProduct && (
          <>
            <div className={styles.review}>
              <span>
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={"/imgs/products/star-full.svg"} />
                ))}
                <img src={"/imgs/products/star.svg"} />
              </span>
              <h6 className={styles.reviewCount}>{reviewCount} Reviews</h6>
            </div>

            <div className={styles.colors}>
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`/imgs/products/color${i}.svg`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
