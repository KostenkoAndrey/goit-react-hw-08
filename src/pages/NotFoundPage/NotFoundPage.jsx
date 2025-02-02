import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import s from "./NotFoundPage.module.css"

const NotFoundPage = () => {
const navigate = useNavigate();
useEffect(()=> {
const goBack = setTimeout(()=> { navigate("/") }, 3000);

return () => {
clearTimeout(goBack);
};
},[navigate])

  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
      <p className={s.error}>404</p>
      <h1 className={s.errorTitle}> Page not found</h1>
      <p className={s.errorDesc}>Sorry, we couldn’t find the page. You will be redirected to the home page.</p>
      </div>
    </div>
  
  );
}

export default NotFoundPage;
