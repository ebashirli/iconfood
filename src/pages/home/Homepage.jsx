import styles from "./Homepage.module.scss";
import Clients from "../../components/Clients/Clients";
import Hero from "../../components/Hero/Hero";
import ShopCards from "../../components/ShopCards/ShopCards";
import ProductCards from "../../components/ProductCards/ProductCards";
import Content from "../../components/Content/Content";
import Features from "../../components/Features/Features";
import Blog from "../../components/Blog/Blog";
import Base from "../../components/Base";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <Base>
        <Hero />
        <Clients />
        <ShopCards />
        <ProductCards />
        <Content />
        <Features />
        <Blog />
      </Base>
    </main>
  );
}
