import { Link } from "react-router-dom";
import s from './Layout.module.css';

const AuthNav = () => {
  return (
   <div className={s.registList}>
    <Link className={s.registItems} to={"/register"}>Registration</Link>
    <Link className={s.registItems} to={'/login'}>Login</Link>
   </div>
  )
}

export default AuthNav;
