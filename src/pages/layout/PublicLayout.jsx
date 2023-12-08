import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../../router/constants";

function PublicLayout() {
  const { token } = useSelector((state) => state.auth);
  if (!token) return <Outlet />;
  return <Navigate to={routes.LOGIN} />;
}

export default PublicLayout;
