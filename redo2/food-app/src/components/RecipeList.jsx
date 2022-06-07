import React from 'react';
import SingleRecipe from "./SingleRecipe";
import {useSelector} from "react-redux";

function RecipeList(){
    let recipes = useSelector(state => state)
    return(
        <div className="recipeContainer">
            {recipes.map(recipe =>{
                return <SingleRecipe key={recipe.id}
                                     imgURL={recipe.imgURL}
                                     title={recipe.title}
                                     ingredients={recipe.ingredients} />
            })}
        </div>
    )
}

export default RecipeList;