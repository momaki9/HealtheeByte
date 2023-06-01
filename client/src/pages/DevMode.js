import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";

const DevMode = () => {

    const { loading, data } = useQuery(QUERY_RECIPES);
    const allRecipes = data?.allRecipes || [];
    console.log(allRecipes);
    return (
        <>
        <h2>To Do's</h2>
        <ol style={{margin: '2%'}}>
            <li style={{margin: '1%', fontSize: '23px'}}>Modify Model inorder to incorporate saving recipes?</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Work on creating a Recipe Outline page - IN PROGRESS</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Implement Recipe Search Functionality</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Create a profile page</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Allow logged in users to save recipes</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Implement Logout Functionality</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Figure out how to include images</li>
            <li style={{margin: '1%', fontSize: '23px'}}>Figure out how to embed youtube videos</li>
        </ol>
        </>
    )
};

export default DevMode;