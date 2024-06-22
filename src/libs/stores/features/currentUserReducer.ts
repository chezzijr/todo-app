import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("currentUser")
const currentUser = initialUser ? JSON.parse(initialUser) : ""

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState: {
        currentUser: currentUser as string,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
        },
        removeCurrentUser: (state) => {
            state.currentUser = "";
            localStorage.removeItem("currentUser")
        },
    },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
