import Bar from '../components/Bar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {
    Typography
} from '@mui/material';


const Home = () => {
    return (
        <>
            <Bar />
            <Typography variant="h2"> Healthee-Byte: Coming Soon!</Typography>
            <Login />
            <Signup />
        </>
    )
};

export default Home;