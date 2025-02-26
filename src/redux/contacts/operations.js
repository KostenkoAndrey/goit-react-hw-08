import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data }  = await authApi.get("/contacts");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async ( body, thunkAPI) => {
    try {
        const { data } = await authApi.post("/contacts", body);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async ( taskId, thunkAPI) => {
    try {
        const { data } = await authApi.delete(`/contacts/${taskId}`);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateContact = createAsyncThunk("contacts/updateContact", async ( body, thunkAPI) => {
    try {
        const { id, name, number } = body;
        const { data } = await authApi.patch(`/contacts/${id}`, {
            name,
            number });
        
        
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

