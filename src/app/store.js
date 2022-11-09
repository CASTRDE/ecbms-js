import { configureStore } from '@reduxjs/toolkit';
import {loginSlice} from "../slicers/loginSlicer";

const store = configureStore({
    reducer: {
        userDetails: loginSlice.reducer,
    }
});

export default store;