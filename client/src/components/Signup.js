import {
    Button,
    Modal,
    Box,
    TextField,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { SIGNUP_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #ADD8E6',
    boxShadow: 24,
    p: 4,
};

const myStyle = {
    padding: '1%',
    margin: '1%'
}

const Signup = () => {
    // State for Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const hanldeClose = () => setOpen(false);

    // State for Signup form
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [createAcct, { error, data }] = useMutation(SIGNUP_USER);

    const handleChage = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        console.log(formState);
        try {
            const { data } = await createAcct({
                variables: { ...formState }
            });
            Auth.login(data.createAcct.token)
        } catch (error) {
            console.error(error)
        }
        setFormState({
            username: "",
            email: "",
            password: ""
        })
    };

    return (
        <>
            <Typography>Don't have an account?<Button onClick={handleOpen} variant='caption'>Sign up!</Button></Typography>
            <Modal
                open={open}
                onClose={hanldeClose}
            >
                <Box sx={style}>
                    <Typography variant='h4' paddingBottom={'3%'}>Sign up</Typography>
                    <Box >
                        <TextField
                            onChange={handleChage}
                            name='username'
                            value={formState.username}
                            helperText="Enter a username"
                            label="username"
                            sx={myStyle}
                        />
                        <TextField
                            onChange={handleChage}
                            name='email'
                            value={formState.email}
                            helperText="Enter your email"
                            label="Email"
                            sx={myStyle}
                        />
                        <TextField
                            onChange={handleChage}
                            name='password'
                            value={formState.password}
                            helperText="Enter a strong password"
                            label="Password"
                            type='password'
                            sx={myStyle}
                        />
                        <Button variant='outlined' size='large' type='submit' onClick={handleFormSubmission}>Submit</Button>
                    </Box>

                </Box>
            </Modal>
        </>
    )
}

export default Signup;