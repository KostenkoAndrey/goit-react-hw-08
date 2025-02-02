import { NavLink } from 'react-router-dom';
import s from './Layout.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
const selectorIsLogin = useSelector(selectorIsLoggedIn);
const styleHeader = ( {isActive} ) => clsx(s.navItems, isActive && s.active); 

  return (<>
   <nav className={s.navMenu}>
    <NavLink className={styleHeader} to={'/'}>Home</NavLink>
    { selectorIsLogin && <NavLink className={styleHeader} to={'/contacts'}>Contacts</NavLink> }
   </nav>
   </>
  )
}

export default Navigation;
