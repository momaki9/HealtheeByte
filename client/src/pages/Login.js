import Bar from '../components/Bar';
import LoginComp from '../components/LoginComp';
import Signup from '../components/Signup';
import {
    Typography
} from '@mui/material';
import "../style/style.css"

const Login = () => {
    return (
        <div>
            <Bar />
            <Typography variant="h2" sx={{margin: 1, textAlign: "center"}}> Healthee-Byte</Typography>
            <div className='login-div'>
            <Typography variant='h5' sx={{marginLeft: 15}}>User Login:</Typography>
            <LoginComp />
            <Signup />
            </div>
        </div>
    )
};

export default Login;