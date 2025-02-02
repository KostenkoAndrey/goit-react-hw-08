import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

import { Field, Form, Formik } from "formik";
import s from "./Registration.module.css";

const RegistrationPage = () => {
const initialValue = {
    name: "",
    email: "",
    password: "",
};
const dispatch = useDispatch();
const handleSubmit = ( value, action) => {
dispatch(registerThunk(value)); 
action.resetForm();
} 

  return (
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={s.RegistrationForm}>
        <h6 className={s.formTitle}>Create an account.</h6>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Name:</span>
        <Field className={s.formInput} type="text" name="name" placeholder="Jhon Wattson..."></Field>
        </label>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Email:</span>
        <Field className={s.formInput} type="email" name="email" placeholder="JhonWattson@mail.com"></Field>
        </label>
        <label className={s.formLabel}>
          <span className={s.formSpan}>Password:</span>
        <Field className={s.formInput} name="password" type="password" placeholder="Jhon1111..."></Field>
        </label>
        <button className={s.formBtn} type="submit">Submit</button>
        <Link to={"/login"} className={s.registrationLink}>Already have an account?</Link>
      </Form>
    </Formik>
  )
}

export default RegistrationPage;
