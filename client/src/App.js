import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Recipe from './pages/Recipe';
import Browse from './pages/Browse';
import DevMode from './pages/DevMode';
import SingleRecipe from './components/SingleRecipe';
import RecipeOutline from './components/RecipeOutline';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/recipes'   
            element={<Browse />}
          /> 
          <Route
            path='/recipes/:recipeId'   
            element={<SingleRecipe />}
          />          
          <Route
            path='/Profile'
            element={<Profile />}
          />
          <Route
            path='/addrecipe'
            element={<Recipe />}
          />
          <Route 
          path='/dev'
          element={<DevMode />}
          />
          <Route
          path='/dev2'
          element={<RecipeOutline />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
