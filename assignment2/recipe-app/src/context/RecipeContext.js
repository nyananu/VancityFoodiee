import React, {useState, createContext}from "react";

export const RecipeContext = createContext();

// Hold information and pass it down to all the components that need it
export const RecipeProvider = props => {
    const [recipes, setRecipes] = useState([
        {
            key: "1",
            id: "1",
            imgURL: "https://images.unsplash.com/photo-1521513919009-be90ad555598?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099",
            title: "Sunny Side Up",
            ingredients: "egg, oil, salt, pepper",
            instructions: "Fry egg in oil for 2 min. Season with salt and pepper."
        },
        {
            key: "2",
            id: "2",
            imgURL: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158",
            title: "Buttery Toast",
            ingredients: "brioche slice, butter",
            instructions: "Put brioche slice in toaster for 2 min. Spread butter and enjoy while hot."
        },
        {
            key: "3",
            id: "3",
            imgURL: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            title: "Savoury Ramen",
            ingredients: "ramen pack, egg, scallions",
            instructions: "Boil and season ramen according to the pack. Top with fried egg and scallions."
        },
        {
            key: "4",
            id: "4",
            imgURL: "https://images.unsplash.com/photo-1612531753325-8efb87255568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            title: "Fried Rice",
            ingredients: "egg, day-old rice, scallions, mixed veggies, soy sauce, salt, pepper, sesame oil",
            instructions: "Fry an egg and mix all the ingredients in a flaming hot pan. When combined, enjoy with a splash of sesame oil."
        }
    ]);
    return(
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>

    );
}