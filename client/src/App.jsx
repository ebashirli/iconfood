import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import SignInUp from "./pages/SignInUp";

import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blogpage";
import Article from "./pages/Article";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="login" element={<SignInUp isLogin={true} />} />
          <Route path="signup" element={<SignInUp />} />

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
    </AuthProvider>
  );
}

export default App;
