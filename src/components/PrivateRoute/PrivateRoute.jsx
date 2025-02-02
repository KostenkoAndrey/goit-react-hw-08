import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
const isLoggin = useSelector(selectorIsLoggedIn);
  return isLoggin ? children :  <Navigate to="/login"/>
};

export default PrivateRoute;
