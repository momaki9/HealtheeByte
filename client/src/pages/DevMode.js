
const DevMode = () => {
    return (
        <>
            <h2>To Do's</h2>
            <ol style={{ margin: '2%' }}>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Recipe Search Functionality</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to delete and update recipe/profile</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Create a profile page</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow logged in users to save recipes</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Logout Functionality</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to include images</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Work on creating a Recipe Outline page</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to embed youtube videos</li>
            <h3>Future Development:</h3>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to include images into their recipes as well as resize/position them as needed</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement recipe rating system and visit count (so that top rated and most viewed/trending can be set as categories?)</li>
            </ol>
        </>
    )
};

export default DevMode;