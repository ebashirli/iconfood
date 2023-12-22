import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Products from "../pages/Products";
import Product from "../pages/Product.jsx";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Base from "./Base";
import { routes } from "../utils/constants";

function App() {
  return (
    <Base>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path={routes.HOME} element={<Homepage />} />
        <Route path={routes.PRODUCTS} element={<Products />} />
        <Route path={`${routes.PRODUCTS}/:id`} element={<Product />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Base>
  );
}

export default App;
