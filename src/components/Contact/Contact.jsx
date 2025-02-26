import { FaUser as User } from "react-icons/fa";

import s from "./Contact.module.css"
import { BsFillTelephoneFill as Phone } from "react-icons/bs";



const Contact = ({ id, name, number, openModal, onOpenEdit }) => {

return (
<div className={s.wrapper}>
    <div className={s.outercontainer}>
    <div className={s.innerCont}>
        <User className={s.contactIcon}/>
        <p className={s.innerText}>{name}</p>
    </div>
    <div className={s.innerCont}>
        <Phone className={s.contactIcon}/>
        <p className={s.innerText}>{number}</p>
    </div>
    </div>
   <div className={s.btnContainer}>
   <button  onClick={() => openModal(id)} className={s.contantNBtn}>Delete</button>
   <button  onClick={() => onOpenEdit(id)} className={s.contantNBtn}>Edit</button>
   </div>
    </div>)}

export default Contact;
