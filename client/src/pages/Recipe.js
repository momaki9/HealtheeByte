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
    Button
} from '@mui/material';
import '../style/style.css';

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
const helperOutline = "<h4>Ingredients:</h4><ul><li></li></ul><br/><h4>Procedure:</h4><ol><li></li>";

const Recipe = () => {
    const [title, setTitle] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [vidLink, setVidLink] = useState('');
    const [description, setDescription] = useState(helperOutline);

    const [addRecipe, { error }] = useMutation(ADD_RECIPE);

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        try {
            const data = await addRecipe({
                variables: {
                    title: title,
                    image: imgLink,
                    rating: '',
                    description: description,
                    video: vidLink
                }
            });
            console.log(data);
            setTitle('');
            setImgLink('');
            setDescription('');
            setVidLink('');
        } catch (err) {
            console.error(err)
        }

    }
    if (error) {
        console.log(error)
    };

    return (
        <>
            <Bar />
            <div className='add-recipe'>
                <Typography variant='h3'>Add a Recipe</Typography>
                <Stack direction={'row'} spacing={2} className='add-recipe-stack'>
                    <Typography variant='h5'>Give your recipe a title:</Typography>
                    <TextField
                        value={title}
                        name='title'
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={'Amazing Chicken Avocado Salad!'}
                        sx={{width: 444}}
                    ></TextField>
                </Stack>
                <Stack direction={'row'} spacing={2} className='add-recipe-stack'>
                    <Typography variant='h5'>Image Link</Typography>
                    <TextField
                        value={imgLink}
                        name='imgLink'
                        onChange={(e) => setImgLink(e.target.value)}
                        placeholder='upload your images to postimages.org then paste your link here'
                        sx={{width: 574}}
                    ></TextField>
                </Stack>
                <Stack direction={'row'} spacing={2} paddingTop={"2%"} marginBottom={"2%"} paddingBottom={"2%"} className='add-recipe-stack'>
                    <Typography variant='h5'>Ingredients & Procedure</Typography>
                    <ReactQuill
                        value={description}
                        name='ingredientsAndProcedure'
                        onChange={setDescription}
                        theme='snow'
                        modules={modules}
                        formats={formats}
                    />
                </Stack>
                <Stack direction={'row'} spacing={2} className='add-recipe-stack'>
                    <Typography variant='h5'>Video link</Typography>
                    <TextField
                        value={vidLink}
                        name='vidLink'
                        onChange={(e) => setVidLink(e.target.value)}
                        placeholder='Insert Youtube link here!'
                        sx={{width: 604}}
                    ></TextField>
                </Stack>
                <Button size='large' variant='contained' onClick={handleFormSubmission} sx={{ p: 2, margin: 4 }}>Submit</Button>
            </div>
        </>
    )
};

export default Recipe;