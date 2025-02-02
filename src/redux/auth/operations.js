import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



export const authApi = axios.create({ baseURL: "https://connections-api.goit.global" });
export const setAuthHeader = token =>  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;


export const registerThunk = createAsyncThunk("auth/register", async ( credentials, thunkAPI )=> {
try {
        const { data }  = await authApi.post("/users/signup", credentials);
        setAuthHeader(data.token);
        return data;
    } catch (e) {
        if(e.response.data.code === 11000){ toast.error("User already exist") };
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const loginThunk = createAsyncThunk("auth/login", async ( credentials, thunkAPI )=> {
    try {
            const { data }  = await authApi.post("/users/login", credentials);
            setAuthHeader(data.token);
            return data;
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.message);
        }
});

export const logoutThunk = createAsyncThunk("auth/logout", async ( _, thunkAPI )=> {
    try {
            const { data }  = await authApi.post("/users/logout");
            return data;
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.message);
        }
});

export const refreshThunk = createAsyncThunk("auth/refresh", async ( _, thunkAPI )=> {
    const savedToken = thunkAPI.getState().auth.token;
    if(!savedToken){
        return thunkAPI.rejectWithValue("Token not exist");
    };
    setAuthHeader(savedToken);
    try {
            const { data }  = await authApi.get("/users/current");
            return data;
        } catch (e) {
            return  thunkAPI.rejectWithValue(e.message);
        }
});

