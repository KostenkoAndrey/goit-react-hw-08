import { Field, Form, Formik } from "formik";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginThunk } from "../../redux/auth/operations";
import s from "../RegistrationPage/Registration.module.css";

const LoginPage = () => {
    const initialValue = {
        email: "",
        password: "",
    };
const dispatch = useDispatch();

    const handleSubmit = ( value, action) => {
      dispatch(loginThunk(value));
      action.resetForm();
      } 

  return (
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          <Form className={s.RegistrationForm}>
            <h6 className={s.formTitle}>Welcome back!</h6>
            <label className={s.formLabel}>
              <span className={s.formSpan}>Email:</span>
            <Field className={s.formInput} type="email" name="email" placeholder="JhonWattson@mail.com"></Field>
            </label>
            <label className={s.formLabel}>
              <span className={s.formSpan}>Password:</span>
            <Field className={s.formInput} name="password" type="password" placeholder="Jhon1111..."></Field>
            </label>
            <button className={s.formBtn} type="submit">Submit</button>
            <Link to={"/register"} className={s.registrationLink}>Have not an account?</Link>
          </Form>
        </Formik>
)};

export default LoginPage;
