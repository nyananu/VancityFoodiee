import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./reducer";

export const store = configureStore({
    reducer: {
        recipes: recipesReducer
    },
    devTools: true
});