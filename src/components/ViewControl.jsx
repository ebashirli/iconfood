import styles from "./ViewControl.module.scss";

function ViewControl() {
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
        <select name="sortBy" id="sortBy">
          <option value="populaity">Populaity</option>
          <option value="cheapestFirst">Cheapest</option>
          <option value="cheapestLast">Most Expensive</option>
        </select>
      </div>
    </div>
  );
}

export default ViewControl;
