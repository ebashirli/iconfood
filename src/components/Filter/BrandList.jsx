import styles from "./BrandList.module.scss";

function BrandList() {
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
            <input type="checkbox" name="brand" id={"brand" + brand + i} />
            <label htmlFor={"brand" + brand + i}>{brand}</label>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BrandList;
