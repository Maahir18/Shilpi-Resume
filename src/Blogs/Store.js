import {configureStore } from '@reduxjs/toolkit'
import userReducer from "../Blogs/userSlice"

export default configureStore ({
    reducer:{
        user: userReducer,
    }
});
