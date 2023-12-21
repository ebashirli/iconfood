import styles from "./SearchInput.module.scss";

function SearchInput() {
  return (
    <div className={styles.container}>
      <img src="/imgs/filter/search.svg" alt="" />
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
