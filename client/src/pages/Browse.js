import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";
import Bar from "../components/Bar";
import {
    Stack,
    Typography
} from '@mui/material';

const Browse = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const allRecipes = data?.allRecipes || [];
    // console.log(allRecipes);
    return (
        <>
        <Bar />
        <h1>Page to show all recipes</h1>
        {allRecipes.map((recipe) => (
            <Stack key={recipe._id}>
                <Typography>{recipe.title}</Typography>
            </Stack>
        ))}
        </>
    )
};

export default Browse;