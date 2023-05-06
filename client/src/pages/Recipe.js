import Bar from '../components/Bar';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
    Typography,
    TextField,
    Stack,
    ListItem,
    Button,
    List,
} from '@mui/material';

const ingredientArray = ["Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"];

const Recipe = () => {
    const [ingredient, setIngredient] = useState('');
    const [title, setTitle] = useState('');
    const [procedure, setProcedure] = useState('');
    const addIngredient = () => {
        console.log(ingredient);
        ingredientArray.push(ingredient);
        setIngredient('');
        console.log(ingredientArray);
    }

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
                <TextField
                    value={ingredient}
                    name='ingredient'
                    onChange={(e) => setIngredient(e.target.value)}
                >
                </TextField>
                <Button onClick={addIngredient}>Add</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <List>
                {ingredientArray &&
                    ingredientArray.map((ingredientItem) => (
                        <ListItem key={ingredientItem}>{ingredientItem}</ListItem>
                    ))}
                    </List>
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