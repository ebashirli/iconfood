import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../../router/constants";
import Base from "../../components/Base";

function ProtectedLayout() {
  const { token } = useSelector((state) => state.auth);
  if (!token)
    return (
      <Base>
        <Outlet />
      </Base>
    );
  return <Navigate to={routes.HOME} />;
}

export default ProtectedLayout;
