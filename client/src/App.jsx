import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProducts } from "./api/products";

import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blogpage";
import Article from "./pages/Article";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const { data } = await getProducts();
      setProducts(data);
    }
    getAllProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="products" element={<ProductList />}>
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />

        <Route path="blog" element={<Blogpage />} />
        <Route path="article" element={<Article />} />
        <Route path="faq" element={<Faq />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
