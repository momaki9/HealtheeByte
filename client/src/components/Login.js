import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
    Box,
    TextField,
    Button,
    FormControl
} from '@mui/material';

const Login = () => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token)
        } catch (error) {
            console.error(error)
        }
        setFormState({
            email: "",
            password: ""
        })
    }

    return (
        <FormControl>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 }
            }}
            >
                <TextField
                    onChange={handleChage}
                    name='email'
                    value={formState.email}
                    helperText="Please enter your email"
                    label="Email"
                />
                <TextField
                    onChange={handleChage}
                    name='password'
                    value={formState.password}
                    helperText="Please enter ypur password"
                    label="Password"
                    type='password'
                />
            </Box>
            <Button variant='outlined' size='large' type='submit' onClick={handleFormSubmission}>Submit</Button>
        </FormControl>
    )
};

export default Login;