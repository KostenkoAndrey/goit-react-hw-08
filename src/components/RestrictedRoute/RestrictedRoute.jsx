import { useSelector } from 'react-redux'
import { selectorIsLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
const isLogin = useSelector(selectorIsLoggedIn);
    return isLogin ? <Navigate to={"/"}/> : children;
}

export default RestrictedRoute;
