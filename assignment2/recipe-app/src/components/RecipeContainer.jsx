import React from "react";
import RecipeCard from "./RecipeCard"
import allRecipes from "../allRecipes";

function RecipeContainer(){
    console.log(allRecipes);
    return<div className="recipeContainer">
        <RecipeCard
            title= {allRecipes[0].title}
            imgURL={allRecipes[0].imgURL}
            ingredients= {allRecipes[0].ingredients}
        />
        <RecipeCard
            title= {allRecipes[1].title}
            imgURL={allRecipes[1].imgURL}
            ingredients= {allRecipes[1].ingredients}
        />
        <RecipeCard
            title= {allRecipes[2].title}
            imgURL={allRecipes[2].imgURL}
            ingredients= {allRecipes[2].ingredients}
        />
    </div>
}

export default RecipeContainer;