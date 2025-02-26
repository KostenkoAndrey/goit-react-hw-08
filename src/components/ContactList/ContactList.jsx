import { useSelector } from "react-redux";

import s from "../Contact/Contact.module.css"
import { selectFilteredContacts } from "../../redux/filters/selectors"
import Contact from "../Contact/Contact";



const ContactList = ({ openModal, onOpenEdit }) => {    
const contacts = useSelector(selectFilteredContacts);
    
return (
    <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) =>
        <li  key={id} className={s.contactItem} >
            <Contact openModal={openModal} id={id} name={name} number={number} onOpenEdit={onOpenEdit}/>
            </li>)}
    </ul>
)
};

export default ContactList;
