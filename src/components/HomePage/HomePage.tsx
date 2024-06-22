import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import type { IRootState } from "@/libs/stores/store";
import { removeCurrentUser, setCurrentUser } from "@/libs/stores/features/currentUserReducer";
import { addUser } from "@/libs/stores/features/allUsersReducer";
import { useState } from "react";
import type { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export default function HomePage() {
    const allUsers = useSelector((state: IRootState) => state.allUsers.users);
    const currentUser = useSelector((state: IRootState) => state.currentUser.currentUser);
    const dispatch = useDispatch()

    const [user, setUser] = useState("")
    const updateUserAction = (user: string) => {
        return (dispatch: Dispatch) => {
            dispatch(addUser(user))
            dispatch(setCurrentUser(user))
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-around w-[40%] h-[30%]">
                {currentUser
                    ? (
                        <>
                            <h1>Welcome, {currentUser}</h1>
                            <Button
                                label="Change User"
                                onClick={() => dispatch(removeCurrentUser())}
                            />
                            <Button
                                link
                                label="Go to Dashboard"
                                onClick={() => window.location.href = "/dashboard"}
                            />
                        </>
                    ) : (
                        <>
                            <h1>Select User</h1>
                            <Dropdown
                                className="w-full text-left pl-4 py-3"
                                editable
                                value={user}
                                options={allUsers}
                                onChange={(e) => setUser(e.value)}
                                placeholder="Select a user or type a new one"
                            />
                            <Button
                                label="Login"
                                disabled={!user}
                                onClick={() => {
                                    dispatch(
                                        updateUserAction(user) as unknown as UnknownAction
                                    )
                                }}
                            />
                        </>
                    )
                }
            </div>
        </div>
    );
}
