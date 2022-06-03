import React from "react";

function RecipeCard(props){
    return <div className="recipeCard">
        <img className="recipeImg"
             src = {props.imgURL}
             alt= "food_img"/>
        <h3 className="recipeTitle">{props.title}</h3>
        <p className="recipeIngredients">{props.ingredients}</p>
    </div>
}

export default RecipeCard;