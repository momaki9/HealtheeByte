
const DevMode = () => {
    return (
        <>
            <h2>To Do's</h2>
            <ol style={{ margin: '2%' }}>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to add recipes to their favorites (Model needs updating).</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to view recipes they have created</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Recipe Search Functionality</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Deploy app to Heroku</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to delete and update recipe/profile</li>
                <ul>
                    <li style={{ margin: '1%', fontSize: '23px' }}>Add image link or video link</li>
                    <li style={{ margin: '1%', fontSize: '23px' }}>Update username? Profile picture? (Model needs updating)</li>
                </ul>
                <li style={{ margin: '1%', fontSize: '23px' }}>Work on updating the profile page</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow logged in users to save recipes</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement Logout Functionality</li>
                <ul>
                    <li style={{ margin: '1%', fontSize: '23px' }}>Need logout/sign in buttons to 'know' when a user is logged in</li>
                </ul>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to include images from user upload</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Figure out how to embed youtube videos</li>
                <h3>Future Development:</h3>
                <li style={{ margin: '1%', fontSize: '23px' }}>Allow users to include images into their recipes as well as resize/position them as needed</li>
                <li style={{ margin: '1%', fontSize: '23px' }}>Implement recipe rating system and visit count (so that top rated and most viewed/trending can be set as categories?)</li>
                <ul>
                    <li style={{ margin: '1%', fontSize: '23px' }}>While at it, update Recipe model to include: prep time, cook time, serving size, difficulty, notes, etc</li>
                </ul>
            </ol>
        </>
    )
};

export default DevMode;