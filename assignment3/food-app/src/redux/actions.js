export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export function addRecipe(recipe) {
    return {
        type: ADD_RECIPE,
        payload: recipe
    }
}

export function deleteRecipe(recipe) {
    return {
        type: DELETE_RECIPE,
        payload: recipe
    }
}
