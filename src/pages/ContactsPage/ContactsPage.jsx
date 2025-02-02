import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Modal from "../../components/Modal/Modal";

const ContactsPage = () => {
const [ modal, setModal ] = useState(false);
const [contactToDelete, setContactToDelete] = useState(null);
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

  return (
  <>
  <ContactForm/>
  <SearchBox/>
  <ContactList openModal={openModal}/>
  { modal && <Modal closeModal={closeModal} confirmDelete={confirmDelete}/> }
  </>
  )
}

export default ContactsPage;
