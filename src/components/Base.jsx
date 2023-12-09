import styles from "./Base.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";

function Base({ children, headerClassName, footerClassName }) {
  return (
    <div className={styles.container}>
      <Header className={headerClassName} />
      {children}
      <Footer className={footerClassName} />
    </div>
  );
}

Base.propTypes = {
  children: PropTypes.node,
  footerClassName: PropTypes.string,
  headerClassName: PropTypes.string,
};

export default Base;
