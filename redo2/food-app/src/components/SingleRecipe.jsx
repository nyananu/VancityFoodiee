import React from 'react';
import {useDispatch} from "react-redux";
import {deleteRecipe} from "../redux/actions";

function SingleRecipe(props){
    let dispatch = useDispatch();
    return(
        <div>
            <h3>Single Recipe</h3>
            <div className="recipeCard">
                <img className="recipeImg"
                     src ={props.imgURL}
                     alt= "food_img"/>
                <h3 className="recipeTitle">{props.title}</h3>
                <p className="recipeIngredients">{props.ingredients}</p>
            </div>
            <button>View Instructions</button>
            <button
                onClick={() => dispatch(deleteRecipe(props))}
            >Delete</button>
        </div>
    )
}

export default SingleRecipe;