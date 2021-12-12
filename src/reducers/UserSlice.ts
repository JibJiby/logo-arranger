import { createSlice } from '@reduxjs/toolkit';

export type UserInitialStateType = {
    isLogged: boolean;
};

const initialState: UserInitialStateType = {
    isLogged: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserState(state) {
            state.isLogged = !state.isLogged;
        },
    },
});

export default userSlice;
