import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Products from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Base from "./components/Base";
import { routes } from "./utils/constants";

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
        >
          {/* <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="bookings/:bookingId" element={<Booking />} />
        <Route path="checkin/:bookingId" element={<Checkin />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} /> */}
        </Route>
        <Route path={routes.HOME} element={<Homepage />} />
        <Route path={routes.PRODUCTS} element={<Products />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Base>
  );
}

export default App;
