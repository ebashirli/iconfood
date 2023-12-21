import styles from "./FilterContainer.module.scss";
import AccordionList from "./AccordionList";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import SearchInput from "./SearchInput";
import ColorList from "./ColorList";
import TagList from "./TagList";
import PriceFilter from "./PriceFilter";

function FilterContainer() {
  return (
    <div className={styles.container}>
      <h5>Filter :</h5>
      <SearchInput />
      <AccordionList />
      <div className={styles.line}></div>
      <BrandList />
      <div className={styles.line}></div>
      <ColorList />
      <div className={styles.line}></div>
      <CategoryList />
      <div className={styles.line}></div>
      <TagList />
      <div className={styles.line}></div>
      <PriceFilter />
    </div>
  );
}

export default FilterContainer;
