import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api'

export const registerUserAction = createAsyncThunk("user/register", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await api.post("/user/register", userData)
        console.log(data)
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.response.data.message || error.message)
    }
})

export const userLoginAction = createAsyncThunk("user/login", async (loginData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/login", loginData)
        return { ...data.result, token: data.token }
    } catch (error) {
        return rejectWithValue(error.message || error.response.data.message)
    }
})

export const getAllUser = createAsyncThunk("user/userGet", async (getUser, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/user")
        return data.result
    } catch (error) {
        return rejectWithValue(error.message || error.response.data.message)
    }
})
