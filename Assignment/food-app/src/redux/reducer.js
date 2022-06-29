import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from './utils';
import { getRecipesAsync } from './thunks';

const INITIAL_STATE = {
    list: [],
    getRecipes: REQUEST_STATE.IDLE,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipesAsync.pending, (state) => {
                state.getRecipes = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getRecipesAsync.fulfilled, (state,action) => {
                state.getRecipes = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getRecipesAsync.rejected, (state, action) => {
                state.getRecipes = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
    }});

export default usersSlice.reducer;