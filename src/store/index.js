import { configureStore } from "@reduxjs/toolkit";
import SliceUser from "./SliceUser";

const store = configureStore({
    reducer: {
        users : SliceUser
    }
})

export default store;