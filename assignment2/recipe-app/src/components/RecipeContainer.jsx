import React from "react";
import RecipeCard from "./RecipeCard"
import allRecipes from "../allRecipes";

function createRecipeCard(recipe){
    return(
        <RecipeCard
            key = {recipe.id}
            imgURL = {recipe.imgURL}
            title = {recipe.title}
            ingredients = {recipe.ingredients}
            />
    );
}

function RecipeContainer(){
    return<div className="recipeContainer">
        {allRecipes.map(createRecipeCard)}
    </div>
}

export default RecipeContainer;