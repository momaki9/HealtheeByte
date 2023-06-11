import Bar from '../components/Bar';
import LoginComp from '../components/LoginComp';
import Signup from '../components/Signup';
import {
    Typography
} from '@mui/material';


const Login = () => {
    return (
        <>
            <Bar />
            <Typography variant="h2"> Healthee-Byte: Coming Soon!</Typography>
            <LoginComp />
            <Signup />
        </>
    )
};

export default Login;