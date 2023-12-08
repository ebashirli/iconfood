import { Routes, Route } from "react-router-dom";
import { routes } from "./constants";
import { Login, Register } from "../pages";
import { ProtectedLayout } from "../pages/layout";
import Homepage from "../pages/home/Homepage";

function Router() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Homepage />} />
      <Route element={<ProtectedLayout />}>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTER} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default Router;
