import React, {useContext}from "react";
import RecipeCard from "./RecipeCard";
import {RecipeContext} from "../context/RecipeContext";

const RecipeList = () => {
    const [recipes, setRecipes] = useContext(RecipeContext);
    return (
        <div className="recipeContainer">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id}
                            imgURL={recipe.imgURL}
                            title={recipe.title}
                            ingredients={recipe.ingredients}/>
            ))}
        </div>
    );

};

export default RecipeList;