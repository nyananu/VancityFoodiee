import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteRecipe} from "../redux/actions";
import Popup from "./Popup";

function SingleRecipe(props){
    const[buttonPopup, setButtonPopup]= useState(false);
    let dispatch = useDispatch();
    return(
        <div>
            <div className="recipeCard">
                <img className="recipeImg"
                     src ={props.imgURL}
                     alt= "food_img"/>
                <h3 className="recipeTitle">{props.title}</h3>
                <p className="recipeIngredients">{props.ingredients}</p>

                <button className='viewButton'
                        onClick={
                            () => setButtonPopup(true)}
                >View Instructions</button>

                <Popup trigger={buttonPopup}
                       setTrigger={setButtonPopup}
                       title = {props.title}
                       instructions = {props.instructions}
                />

                <button className='deleteButton'
                        onClick={() => dispatch(deleteRecipe(props))}>
                    Delete
                </button>
            </div>

        </div>
    )
}

export default SingleRecipe;