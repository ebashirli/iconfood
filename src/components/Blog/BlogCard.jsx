import styles from "./BlogCard.module.scss";

// eslint-disable-next-line react/prop-types
function BlogCard({ img }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={`imgs/blog/${img}.jfif`} alt="" />
        <div className={styles.new + " " + styles["new" + img]}>
          N<span>E</span>
          <span>W</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.labels}>
          <div className={styles.small}>Google</div>
          <div className={styles.small}>Trending</div>
          <div className={styles.small}>New</div>
        </div>

        <h5 className={styles.h5}>Loudest à la Madison #1 (L&apos;integral)</h5>
        <p>
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </p>
        <div className={styles.meta}>
          <div className={styles.aic}>
            <img src="imgs/blog/icon cool-icon-1.svg" alt="" />
            <time>22 April 2021</time>
          </div>
          <div className={styles.aic}>
            <img
              src="imgs/blog/icon ant-design-area-chart-outlined.svg"
              alt=""
            />
            <time>10 comments</time>
          </div>
        </div>
        <div className={styles.learn + " " + styles.aic}>
          <label>Learn more</label>
          <img src="imgs/blog/icon arrow-next.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
