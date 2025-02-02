import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
const selectorIsLogin = useSelector(selectorIsLoggedIn);

return (
<header className={s.headerMenu}>
<Navigation/>
{ selectorIsLogin ? <UserMenu/> : <AuthNav/> }
</header>
)};

export default AppBar;
