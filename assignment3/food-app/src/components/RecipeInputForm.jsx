import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addRecipeAsync} from "../redux/thunks";

function RecipeInputForm(){
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    let dispatch = useDispatch();

    return(
        <div>
            <form className="recipeInputForm">
                <h3>Enter a new recipe!</h3>
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
                                dispatch(addRecipeAsync({
                                    imgURL: imgURL,
                                    title: title,
                                    ingredients: ingredients,
                                    instructions:instructions
                                }));
                            }}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeInputForm;