import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            }
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation createAcct($username: String!, $email: String!, $password: String!) {
        createAcct(username: $username, email: $email, password: $password) {
            user {
                _id
            }
        }
    }
`;

export const ADD_RECIPE = gql`
    mutation addRecipe($title: String!, $image: String, $rating: String, $ingredients: [String]!, $recipeSteps: [String]!, $video: String){
        addRecipe(title: $title, image: $image, rating: $rating, ingredients: $ingredients, recipeSteps: $recipeSteps, video: $video) {
            user {
                _id
            }
        }
    }
`;

// export const ADD_INGREDIENT = gql`

// `;


