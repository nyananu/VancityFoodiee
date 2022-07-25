import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SingleRecipe from './SingleRecipe';
import {getRecipesAsync} from '../redux/thunks';
export const RecipeContainer = () => {
    const recipes = useSelector(state => state.users.list);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipesAsync());
    }, []);

    return recipes.map((recipe) => <SingleRecipe key={recipe.id}
                                                 imgURL={recipe.imgURL}
                                                 title={recipe.title}
                                                 ingredients={recipe.ingredients}
                                                 instructions={recipe.instructions}
    />);
};

