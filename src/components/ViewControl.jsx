import styles from "./ViewControl.module.scss";
import { setSort } from "../store/reducers/products";
import { useDispatch } from "react-redux";

function ViewControl() {
  const dispatch = useDispatch();

  function handleSort(e) {
    dispatch(setSort(e.target.value));
  }
  return (
    <div className={styles.container}>
      <h5>Showing all 12 results</h5>
      <div className={styles.views}>
        <h6>Views:</h6>
        <button>
          <img src="/imgs/filter/nail.svg" alt="" />
        </button>
        <button>
          <img src="/imgs/filter/list.svg" alt="" />
        </button>
      </div>
      <div className={styles.selectContainer}>
        <select name="sortBy" id="sortBy" onChange={handleSort}>
          <option value="populaity">Populaity</option>
          <option value="price">Cheapest</option>
          <option value="-price">Most Expensive</option>
        </select>
      </div>
    </div>
  );
}

export default ViewControl;
