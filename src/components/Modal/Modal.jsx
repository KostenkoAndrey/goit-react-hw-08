import { TbXboxX as Exit } from "react-icons/tb";
import s from "./Modal.module.css"

const Modal = ({ closeModal, confirmDelete }) => {
  return (
    <div className={s.modalContainer}>
      <div className={s.innerContainer}>
        <h6 className={s.modalTitle}>Confirm</h6>
        <Exit className={s.modalBack} onClick={closeModal}></Exit>
      </div>
      <p className={s.modalText}>Are you sure you want to delete?</p>
      <button className={s.modalConfirmBtn} onClick={confirmDelete} type="button">Confirm</button>
      <button className={s.modalCancelBtn} onClick={closeModal} type="button">Cancel</button>
    </div>
  )
}

export default Modal;
