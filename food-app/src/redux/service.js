// make service to get recipes
const getRecipes = async () => {
    const response = await fetch('/api/recipes', {
        method: 'GET'
    });
    return response.json();
};

// make service to download recipes
const downloadRecipes = async () => {
    const response = await fetch('/api/download', {
        method: 'GET'
    });
    return response.json();
};

// make service to add recipe
const addRecipe = async (recipe) => {
    const response = await fetch('/api/recipes/postRecipe', {
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

// make service to delete recipe
const deleteRecipe = async (recipe) => {
    const response = await fetch('/api/recipes/deleteRecipe', {
        method: 'DELETE',
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
    downloadRecipes,
    addRecipe,
    deleteRecipe
};