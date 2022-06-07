import React, {useState} from 'react';
import {addRecipe} from "../redux/actions"
import {useDispatch} from "react-redux";
import {v1 as uuid} from 'uuid';

function RecipeInputForm(){
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    let dispatch = useDispatch();

    return(
        <div>
            <h3>Recipe Input</h3>
            <form className="recipeInputForm">
                <div className="row">
                    <div className="column-left">
                        <input
                            type="text"
                            name="title"
                            placeholder="Recipe Title"
                            value={title}
                            onChange={(e) =>setTitle(e.target.value)}
                            />
                        <input
                            type="text"
                            name="imageURL"
                            placeholder="Image URL"
                            value={imgURL}
                            onChange={(e) =>setImgURL(e.target.value)}
                            />
                        <textarea
                            name="ingredients"
                            placeholder="Ingredients"
                            rows="5"
                            cols="30"
                            value={ingredients}
                            onChange={(e) =>setIngredients(e.target.value)}
                             />
                        <textarea
                            name="instructions"
                            placeholder="Instructions"
                            rows="5"
                            cols="30"
                            value={instructions}
                            onChange={(e) =>setInstructions(e.target.value)}
                        />
                    </div>
                    <button type="submit" id="submitButton"
                            onClick={(event)=>{
                                event.preventDefault();
                                dispatch(addRecipe({
                                    id: uuid(),
                                    imgURL: imgURL,
                                    title: title,
                                    ingredients: ingredients
                                }));
                            }}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeInputForm;