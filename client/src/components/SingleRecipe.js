import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ONE_RECIPE } from "../utils/queries";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Bar from "./Bar";

const modules = {
    toolbar: false
};

const SingleRecipe = () => {
    const { recipeId } = useParams();
    const { loading, data } = useQuery(QUERY_ONE_RECIPE, {
        variables: { recipeId: recipeId}
    });
    const recipe = data?.oneRecipe || {};
    console.log(recipe);
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
        <Bar />
        <h1>Single Recipe?</h1>
        <h3>{recipe.title}</h3>
        <p>Created at: {recipe.createdAt}</p>
        <h4>Description</h4>
        <ReactQuill
            value={recipe.description}
            name={recipe.title}
            readOnly={true}
            modules={modules}
        />
        </>
    )
};

export default SingleRecipe;