import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Layout.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const styleHeader = ( {isActive} ) => clsx(s.navItems, isActive && s.active); 

  return (<>
   <nav className={s.navMenu}>
    <NavLink className={styleHeader} to={'/'}>Home</NavLink>
    <NavLink className={styleHeader} to={'/contacts'}>Contacts</NavLink>
   </nav>
   </>
  )
}

export default Navigation;
