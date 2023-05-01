import {
    Box,
    TextField
} from '@mui/material';

const Login = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 }
        }}
        >
            <TextField
                helperText="Please enter your email"
                label="Email"
            />
            <TextField
                helperText="Please enter ypur password"
                label="Password"
                type='password'
            />
        </Box>
    )
};

export default Login;