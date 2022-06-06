import React, {useState, useContext}from "react";
import {RecipeContext} from "../context/RecipeContext";

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [recipes, setRecipes] = useContext(RecipeContext);

    const updateTitle = (event) => {setTitle(event.target.value);};

    const updateImageURL = (event) => {setImageURL(event.target.value);};

    const updateIngredients = (event) => {setIngredients(event.target.value);};

    const updateInstructions = (event) => {setInstructions(event.target.value);};

    const addRecipe = (event) => {
        event.preventDefault();
        setRecipes(prevRecipes => [...prevRecipes, {imgURL: imageURL, title: title, ingredients: ingredients}]);
    };

    return (
        <form className="recipeForm" onSubmit={addRecipe}>
            <h3>Enter a new recipe!</h3>

            <div className="row">
                <div className="column-left">
                    <input
                        type="text"
                        name="title"
                        placeholder="Recipe Title"
                        value={title}
                        onChange={updateTitle}/>
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Image URL"
                        value={imageURL}
                        onChange={updateImageURL}/>
                    <textarea
                        name="ingredients"
                        placeholder="Ingredients"
                        rows="5"
                        cols="30"
                        value={ingredients}
                        onChange={updateIngredients} />
                    <textarea
                        name="instructions"
                        placeholder="Instructions"
                        rows="5"
                        cols="30"
                        value={instructions}
                        onChange={updateInstructions}/>
                </div>
                <button type="submit" id="submitButton">Submit</button>
            </div>
        </form>
    );
}

export default AddRecipe;