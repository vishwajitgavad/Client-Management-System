import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"

const reduxStore = configureStore({
    reducer: {
        allUser:userSlice
    }
})
export default reduxStore