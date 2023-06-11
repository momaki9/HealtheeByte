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
    if (loading) {
        return (
            <Typography variant="h4">Recipes loading...</Typography>
        )
    }
    return (
        <>
        <Bar />
        <Typography variant="h3" sx={{p: 1}}>All Recipes</Typography>
        {allRecipes.map((recipe) => (
            <Stack key={recipe._id} sx={{p: 1}}>
                <Typography><Link href={`/recipes/${recipe._id}`}>{recipe.title}</Link></Typography>
            </Stack>
        ))}
        </>
    )
};

export default Browse;