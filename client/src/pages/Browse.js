import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";
import Bar from "../components/Bar";
import {
    Stack,
    Typography,
    Link
} from '@mui/material';

const Browse = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const allRecipes = data?.allRecipes || [];
    console.log(allRecipes);
    return (
        <>
        <Bar />
        <h1>Page to show all recipes</h1>
        {allRecipes.map((recipe) => (
            <Stack key={recipe._id}>
                <Typography><Link href={`/recipes/${recipe._id}`}>{recipe.title}</Link></Typography>
            </Stack>
        ))}
        </>
    )
};

export default Browse;