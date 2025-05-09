import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";
import toast from "react-hot-toast";
import { logoutThunk } from "../auth/operations";


export const initialState = {
    contacts:{
        items: [],
        loading: false,
        error: null
    },
};


const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.contacts.loading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = actions.payload;
            })
            .addCase(fetchContacts.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            .addCase(addContact.pending, state => {
                state.contacts.loading = true;
            })
            .addCase(addContact.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items.push(actions.payload);
                toast.success("Contact created successfully");
            })
            .addCase(addContact.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            .addCase(deleteContact.pending, state => {
                state.contacts.loading = true;
            })
            .addCase(deleteContact.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter( task => task.id !== actions.payload.id);
                toast.success("Contact deleted successfully");
            })
            .addCase(deleteContact.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            .addCase(updateContact.pending, state => {
                state.contacts.loading = true;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.map(contact =>
                contact.id === action.payload.id ? action.payload : contact);
                toast.success("Contact updated successfully");
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.payload;
                toast.error("Failed to update contact");
            })
            .addCase(logoutThunk.fulfilled, () => initialState )
            },

})

export const contactsSlice = slice.reducer;

