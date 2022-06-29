const getRecipes = async () => {
    const response = await fetch('http://localhost:4000/recipes', {
        method: 'GET'
    });
    return response.json();
};

export default {
    getRecipes
};