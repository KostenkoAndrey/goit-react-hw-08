import { useDispatch } from 'react-redux';
import s from './Layout.module.css';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
const dispatch = useDispatch();

  return (
   <>
   <button onClick={()=> dispatch(logoutThunk())} type='submit' className={s.logoutBtn}>Logout</button>
   </>
  )
}

export default UserMenu;
