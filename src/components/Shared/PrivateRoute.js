import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (!user)
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
      />
    );

  return <>{children}</>;
};

export default PrivateRoute;
