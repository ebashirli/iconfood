import styles from "./Base.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Base({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Base;
