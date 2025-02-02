import { useSelector } from "react-redux";
import { selectorisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
const isLoggin = useSelector(selectorisLoggedIn);
  return isLoggin ? children :  <Navigate to="/login"/>
};

export default PrivateRoute;
