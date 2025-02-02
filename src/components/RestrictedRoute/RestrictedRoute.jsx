import { useSelector } from 'react-redux'
import { selectorisLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
const isLogin = useSelector(selectorisLoggedIn);
    return isLogin ? <Navigate to={"/"}/> : children;
}

export default RestrictedRoute;
