import styles from "./Base.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Base({ children, headerClassName, footerClassName }) {
  return (
    <div className={styles.container}>
      <Header className={headerClassName} />
      {children}
      <Footer className={footerClassName} />
    </div>
  );
}

export default Base;
