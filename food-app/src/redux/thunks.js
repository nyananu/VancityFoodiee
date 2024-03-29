import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
    actionTypes.GET_RECIPES,
    async () => {
        return await RecipeService.getRecipes();
    }
);

export const downloadRecipesAsync = createAsyncThunk(
    actionTypes.DOWNLOAD_RECIPES,
    async () => {
        return await RecipeService.downloadRecipes();
    }
);

export const addRecipeAsync = createAsyncThunk(
    actionTypes.ADD_RECIPE,
    async (recipe) => {
        return await RecipeService.addRecipe(recipe);
    }
);

export const deleteRecipeAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPE,
    async (recipe) => {
        return await RecipeService.deleteRecipe(recipe);
    }
);