import Bar from '../components/Bar';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    Typography,
    TextField,
    Stack,
    ListItem,
    Button,
    List,
    styled,
    Box,
    Paper,
    Grid
} from '@mui/material';

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link']
    ]
};

// const ingredientArray = ["Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"];
let ingredientArray = [];
let procedureSteps = [];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Recipe = () => {
    const [title, setTitle] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [procedure, setProcedure] = useState('');
    const [vidLink, setVidLink] = useState('');
    const [value, setValue ] = useState('');
    // const [formState, setFormState] = useState(
    //     {
    //         title: '',
    //         image: '',
    //         rating: '',
    //         ingredients: [],
    //         recipeSteps: [],
    //         video: ''
    //     }
    // );

    const [addRecipe, { error }] = useMutation(ADD_RECIPE);
    const addIngredient = () => {
        console.log(ingredient);
        ingredientArray.push(ingredient);
        setIngredient('');
        console.log(ingredientArray);
    }
    const addProcedureSteps = () => {
        console.log(procedure);
        procedureSteps.push(procedure);
        setProcedure('');
        console.log(procedureSteps);
    }

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        try {
            const data = await addRecipe({
                variables: {
                    title: title,
                    image: imgLink,
                    rating: '',
                    ingredients: ingredientArray,
                    recipeSteps: procedureSteps,
                    video: vidLink
                }
            });
            console.log(data);
            setTitle('');
            setImgLink('');
        } catch (err) {
            console.error(err)
        }

    }

    return (
        <>
            <Bar />
            <Typography variant='h3'>Add a Recipe</Typography>
            <Stack direction={'row'} spacing={2}>
                <Typography variant='h5'>Give the recipe a title:</Typography>
                <TextField
                    value={title}
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                ></TextField>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Typography variant='h5'>Image Link</Typography>
                <TextField
                    value={imgLink}
                    name='imgLink'
                    onChange={(e) => setImgLink(e.target.value)}
                ></TextField>
            </Stack>
            <Stack direction={'row'} spacing={2} paddingTop={"2%"} marginBottom={"2%"} paddingBottom={"2%"}>
                <Typography variant='h5'>Ingredients & Procedure</Typography>
                <ReactQuill
                    value={value}
                    name='ingredientsAndProcedure'
                    onChange={setValue}
                    theme='snow'
                    modules={modules}
                    formats={formats}
                />
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
            {/* <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>this could be the form</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>this could be the preview</Item>
                    </Grid>
                </Grid>
            </Box> */}
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
                <TextField
                    value={procedure}
                    name='procedure'
                    onChange={(e) => setProcedure(e.target.value)}
                ></TextField>
                <Button onClick={addProcedureSteps}>Add</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <List>
                    {procedureSteps &&
                        procedureSteps.map((procedureStep) => (
                            <ListItem key={procedureStep}>{procedureStep}</ListItem>
                        ))}
                </List>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Typography variant='h5'>Video Link</Typography>
                <TextField
                    value={vidLink}
                    name='vidLink'
                    onChange={(e) => setVidLink(e.target.value)}
                ></TextField>
            </Stack>
            <Button size='large' variant='contained' onClick={handleFormSubmission}>Submit</Button>
        </>
    )
};

export default Recipe;