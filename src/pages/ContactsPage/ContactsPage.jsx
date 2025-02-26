import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteContact, fetchContacts, updateContact  } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Modal from "../../components/Modal/Modal";
import ModalOnEdit from "../../components/ModalOnEdit/ModalOnEdit";

const ContactsPage = () => {
const [ modal, setModal ] = useState(false);
const [ contactToDelete, setContactToDelete ] = useState(null);
const [ modalEdit, setModalEdit ] = useState(false);
const [ contactToEdit, setContactToEdit ] = useState(null);
const dispatch = useDispatch();
useEffect(()=>{
dispatch(fetchContacts());
}, [dispatch]);


const openModal = (id) => {
  setContactToDelete(id);
  setModal(true);
};

const closeModal = () => {
  setModal(false);
  setContactToDelete(null);
};

const confirmDelete = () => {
if (contactToDelete) {
dispatch(deleteContact(contactToDelete))
};
closeModal();
};

const openModalOnEdit =  (id) => {
  dispatch(fetchContacts());
  setContactToEdit(id);
  setModalEdit(true);
}

const closeModalOnEdit = ()=>{
  setModalEdit(false);
  setContactToEdit(null);
}

const ModalEdit = (values) =>{ 
dispatch(updateContact({ id: contactToEdit, ...values }));
setModalEdit(false);
}

  return (
  <>
  <ContactForm/>
  <SearchBox/>
  <ContactList openModal={openModal} onOpenEdit={openModalOnEdit}/>
  { modal && <Modal closeModal={closeModal} confirmDelete={confirmDelete}/> }
  { modalEdit &&  <ModalOnEdit  contactToEdit={contactToEdit} onClose={closeModalOnEdit} ModalEdit={ModalEdit}/> }
  </>
  )
}

export default ContactsPage;
