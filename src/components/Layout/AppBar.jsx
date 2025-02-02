import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectorAuthUser, selectorisLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
const selectorIsLogin = useSelector(selectorisLoggedIn);
const selectUser = useSelector(selectorAuthUser);

return (
<header className={s.headerMenu}>
<Navigation/>
{ selectorIsLogin && <h3 className={s.userName}>Welcome, {selectUser.name}</h3> }
{ selectorIsLogin ? <UserMenu/> : <AuthNav/> }
</header>
)};

export default AppBar;
