import { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];
const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ]
};

const defaultText = "<h1>My Recipe</h1><ol><li>Cook something</li><li>Eat it!</li><li>Enjoy!</li></ol>";

const DevMode = () => {
    const [value, setValue] = useState(defaultText);
    const { loading, data } = useQuery(QUERY_RECIPES);
    const allRecipes = data?.allRecipes || [];
    // console.log(allRecipes);
    // console.log(value);
    return (
        <>
            <h2>To Do's</h2>
            <ol style={{ margin: '2%' }}>
                <li style={{ margin: '1%', fontSize: '23px' }}>Modify Model inorder to incorporate saving recipes?</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Work on creating a Recipe Outline page - IN PROGRESS</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Recipe Search Functionality</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Create a profile page</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow logged in users to save recipes</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Logout Functionality</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to include images</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to embed youtube videos</li>
            </ol>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}/>
        </>
    )
};

export default DevMode;