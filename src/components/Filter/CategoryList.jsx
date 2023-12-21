import styles from "./CategoryList.module.scss";

function CategoryList() {
  const brands = [
    "Brioche",
    "Sourdough",
    "Sourdough",
    "Baguette",
    "Sourdough",
    "Baguette",
    "Sourdough",
  ];
  return (
    <div className={styles.container}>
      <h5>Brands</h5>
      <ul>
        {brands.map((brand, i) => (
          <div key={brand + i} className={styles.li}>
            <input type="radio" name="category" id={"category" + brand + i} />
            <label htmlFor={"category" + brand + i}>{brand + i}</label>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
