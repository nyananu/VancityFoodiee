// make service to get users => get recipes
const getRecipes = async () => {
    const response = await fetch('http://localhost:4000/users', {
        method: 'GET'
    });
    return response.json();
};

export default {
    getRecipes
};