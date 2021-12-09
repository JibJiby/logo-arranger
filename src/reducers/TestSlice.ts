import { createSlice } from '@reduxjs/toolkit';

export type InitialStateType = {
    test: null | string;
};

const initialState: InitialStateType = {
    test: 'test',
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest(state, action) {
            if (state.test !== 'test') {
                state.test = 'test';
            } else {
                state.test = action.payload;
            }
        },
    },
});

export default testSlice;
