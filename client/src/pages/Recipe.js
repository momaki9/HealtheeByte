import Bar from '../components/Bar';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
    Typography,
    TextField,
    Stack,
    Button
} from '@mui/material';

const Recipe = () => {
    const [ingredient, setIngredient] = useState('');

    return (
        <>
        <Bar />
        <Typography variant='h3'>Add a Recipe</Typography>
        <Stack direction={'row'} spacing={2}>
        <Typography variant='h5'>Give the recipe a title:</Typography>
        <TextField></TextField>
        </Stack>
        <Stack direction={'row'} spacing={2}>
        <Typography variant='h5'>Ingredients</Typography>
        <TextField></TextField>
        <Button>Add</Button>
        </Stack>
        <Stack direction={'row'} spacing={2}>
        <Typography variant='h5'>Procedure</Typography>
        <TextField></TextField>
        <Button>Add</Button>
        </Stack>
        </>
    )
};

export default Recipe;