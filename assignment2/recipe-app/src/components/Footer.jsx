import React, {useContext}from "react";
import {RecipeContext} from "../context/RecipeContext";

function Footer(){
    const [recipes, setRecipes] = useContext(RecipeContext);
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Total Recipes: {recipes.length}</p>
        <p>
            Powered by ♥ for food
        </p>
        <p>
            {currentYear}
        </p>
    </footer>
}

export default Footer;