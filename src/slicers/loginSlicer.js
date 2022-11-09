import { createSlice  } from "@reduxjs/toolkit";

const userDetails = [];

const loginSlice = createSlice({
    name: "user",
    initialState: {userDetails},
    reducers: {
        userData: (state, action) => {
            return action.payload;
        },
    }
})

export const { userData } = loginSlice.actions;
export { loginSlice };
