// make service to get recipes
const getRecipes = async () => {
    const response = await fetch('http://localhost:4000/recipes', {
        method: 'GET'
    });
    return response.json();
};

// make service to add recipe
const addRecipe = async (recipe) => {
    const response = await fetch('http://localhost:4000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

export default {
    getRecipes,
    addRecipe
};