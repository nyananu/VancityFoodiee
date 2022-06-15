import {ADD_RECIPE, DELETE_RECIPE} from "./actions";
import {baseRecipes} from "./states";

export let reducer = (state = baseRecipes, action) => {
    let newRecipes;
    switch(action.type) {
        case ADD_RECIPE:
            newRecipes = [...state];
            newRecipes.push(action.payload);
            return newRecipes;
        case DELETE_RECIPE:
            newRecipes = [...state];
            newRecipes = newRecipes.filter(recipe => recipe.title !== action.payload.title);
            return newRecipes;
    }
    return state;
}

