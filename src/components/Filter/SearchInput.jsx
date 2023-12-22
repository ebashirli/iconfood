import styles from "./SearchInput.module.scss";
import { setQuery } from "../../store/reducers/products";
import { useDispatch } from "react-redux";

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src="/imgs/filter/search.svg" alt="" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          return dispatch(setQuery(e.target.value));
        }}
      />
    </div>
  );
}

export default SearchInput;
