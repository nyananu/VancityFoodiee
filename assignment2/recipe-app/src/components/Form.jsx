import React from "react";

function Form(){
    return <form className="recipeForm">
        <h3>Enter a new recipe!</h3>

        <div className="row">
            <div className="column-form">
                <input type="text" placeholder="Recipe Title" />
                <input type="text" placeholder="Image URL" />
                <textarea name="recipeIngredients" placeholder="Ingredients" rows="5" cols="30" />
                <textarea name="recipeInstructions" placeholder="Instructions" rows="5" cols="30" />
            </div>

            <div className="column-buttons">
                <button type="submit" id="submitButton" onClick="submitRecipe();">Submit</button>
                <button type="reset" id="clearButton" onClick="clearRecipe();">Clear</button>
            </div>
        </div>
    </form>
}

export default Form;