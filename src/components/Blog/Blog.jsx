import styles from "./Blog.module.scss";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className={styles.blog}>
      <header className={styles.header}>
        <h6 className={styles.h6}>Practice Advice</h6>
        <h2 className={styles.h2}>Featured Posts</h2>
      </header>
      <main className={styles.cards}>
        {[1, 2].map((el) => (
          <BlogCard img={el} key={el} />
        ))}
      </main>
    </div>
  );
}

export default Blog;
