import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from './utils';
import { getRecipesAsync, addRecipeAsync, deleteRecipeAsync } from './thunks';

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
            // GET RECIPES
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
            // ADD RECIPE
            .addCase(addRecipeAsync.pending, (state) => {
                state.addRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addRecipeAsync.fulfilled, (state, action) => {
                state.addRecipe = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(addRecipeAsync.rejected, (state, action) => {
                state.addRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            // DELETE RECIPE
            .addCase(deleteRecipeAsync.pending, (state) => {
                state.deleteRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
                state.deleteRecipe = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(deleteRecipeAsync.rejected, (state, action) => {
                state.deleteRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }});

export default usersSlice.reducer;