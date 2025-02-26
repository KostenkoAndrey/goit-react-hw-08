import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ModalOnEdit.module.css"
import { useId } from "react";
import { useSelector } from "react-redux";




const FeedbackSchema = Yup.object().shape({
name: Yup.string().min(3, "Too short!").max(50, "Too long!").required(),
number: Yup.string().min(3, "Too short!").max(50, "Too long!").required()});

const ModalOnEdit = ({ onClose, contactToEdit, ModalEdit }) => {
const contacts = useSelector(state => state.contacts.contacts.items);
const contact = contacts.find(item => item.id === contactToEdit);

const initialValues = { 
name: contact.name, 
number: contact.number};


const nameFieldId = useId();
const numberFieldId = useId();


const handleSubmit = (values, actions) =>{
ModalEdit(values);
actions.resetForm();
}

return (<Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit} 
    validationSchema={FeedbackSchema}>
      <Form className={s.form}>
      <label htmlFor={nameFieldId} className={s.formLabel}>Name</label>
        <Field id={nameFieldId} type="text" name="name" className={s.formInput}/>
          <ErrorMessage name="name" component="span" className={s.errorSpan} />
      <label htmlFor={numberFieldId} className={s.formLabel}>Number</label>
        <Field id={numberFieldId} type="text" name="number" className={s.formInput}/>
        <ErrorMessage name="number" component="span" className={s.errorSpan} />
      <button type="submit" className={s.formBtn}>Save</button>
      <button type="button" onClick={onClose} className={s.formBtn}>Cancel</button>
      </Form>  
      </Formik>
  )
}

export default ModalOnEdit;


