import { createSlice } from "@reduxjs/toolkit";
type User = string

const val = localStorage.getItem("users");
const initialUsers: User[] = val ? JSON.parse(val) : [];

export const allUsersSlice = createSlice({
    name: "allUsers",
    initialState: {
        users: initialUsers
    },
    reducers: {
        addUser: (state, action) => {
            if (state.users.find(user => user === action.payload)) {
                return
            }
            const newUsers = [...state.users, action.payload];
            localStorage.setItem("users", JSON.stringify(newUsers));
            state.users = newUsers
        },
        removeUser: (state, action) => {
            const newUsers = state.users.filter(user => user !== action.payload);
            localStorage.setItem("users", JSON.stringify(newUsers));
            state.users = newUsers
        }
    },
});

export const { addUser, removeUser } = allUsersSlice.actions
export default allUsersSlice.reducer
