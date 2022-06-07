import React from 'react';
import {useDispatch} from "react-redux";
import {deleteRecipe} from "../redux/actions";

function SingleRecipe(props){
    let dispatch = useDispatch();
    return(
        <div>
            <div className="recipeCard">
                <img className="recipeImg"
                     src ={props.imgURL}
                     alt= "food_img"/>
                <h3 className="recipeTitle">{props.title}</h3>
                <p className="recipeIngredients">{props.ingredients}</p>
                <button className='viewButton'>View Instructions</button>
                <button className='deleteButton'
                        onClick={() => dispatch(deleteRecipe(props))}
                >Delete</button>
            </div>

        </div>
    )
}

export default SingleRecipe;