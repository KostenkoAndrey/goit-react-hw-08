import { NavLink } from "react-router-dom";
import s from './Layout.module.css';
import clsx from "clsx";

const AuthNav = () => {
const styleHeader = ( {isActive} ) => clsx(s.registItems, isActive && s.active); 

  return (
   <div className={s.registList}>
    <NavLink className={styleHeader} to={"/register"}>Registration</NavLink>
    <NavLink className={styleHeader} to={'/login'}>Login</NavLink>
   </div>
  )
}

export default AuthNav;
