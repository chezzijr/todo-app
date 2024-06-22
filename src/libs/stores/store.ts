import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./features/currentUserReducer";
import allUsersReducer from "./features/allUsersReducer";

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        allUsers: allUsersReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>
