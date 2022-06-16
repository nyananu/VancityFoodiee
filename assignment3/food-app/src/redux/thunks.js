import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
    actionTypes.GET_RECIPES,
    async () => {
        return await RecipeService.getRecipes();
    }
);