import { useDispatch, useSelector } from 'react-redux';
import s from './Layout.module.css';
import { logoutThunk } from '../../redux/auth/operations';
import { selectorAuthUser, selectorIsLoggedIn } from '../../redux/auth/selectors';

const UserMenu = () => {
const dispatch = useDispatch();
const selectUser = useSelector(selectorAuthUser);
const isLogin = useSelector(selectorIsLoggedIn);

return (
  <>
  { isLogin && <h3 className={s.userName}>Welcome, {selectUser.name}</h3> }
  <button onClick={()=> dispatch(logoutThunk())} type='submit' className={s.logoutBtn}>Logout</button>
  </>
  )
}

export default UserMenu;
