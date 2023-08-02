import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, registerUserAction, userLoginAction } from "./userAction";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        resetUserAction: (state) => {
            state.error = null
            state.rigistered = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUserAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUserAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.registered = true
            })
            .addCase(registerUserAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(userLoginAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(userLoginAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(userLoginAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getAllUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getAllUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(getAllUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export const { resetUserAction } = userSlice.actions
export default userSlice.reducer