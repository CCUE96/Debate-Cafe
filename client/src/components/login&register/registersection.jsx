import { useState } from 'react';
import { Paper, Grid, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { CREATE_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true)
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false)
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/
    const [createUser] = useMutation(CREATE_USER)

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle login logic here\
       
       const {data} = await createUser({
            variables: {
                username,
                email,
                password
            }
        })
        Auth.login(data.createUser.token)
        console.log(email, password);
    };
    const handleUsernameChange = (e) => {
        const usernameInput = e.target.value;
        setUsername(usernameInput);
        setIsUsernameValid(usernameInput.length >= 3);
    }
    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        const isValid = emailRegex.test(emailInput)
        setIsEmailValid(isValid);
    };
    const handlePasswordChange = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        setIsPasswordValid(passwordRegex.test(passwordInput));
    };
    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordInput = e.target.value;
        setConfirmPassword(confirmPasswordInput);
        setIsConfirmPasswordValid(confirmPasswordInput === password);
    };
    const togglePassword = () => setShowPassword(!showPassword);


    return (
        <Grid container justifyContent="center" style={{ minHeight: '100vh' }} mt={12}>
            <Grid item xs={10} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={username}
                                    onChange={handleUsernameChange}
                                    error={!isUsernameValid}
                                    helperText={!isUsernameValid ? "Please enter 3 or more characters" : ""}
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                    error={!isEmailValid}
                                    helperText={!isEmailValid ? "Please enter a valid Email" : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'} 
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={password}
                                    onChange={handlePasswordChange}
                                    error={!isPasswordValid}
                                    helperText={!isPasswordValid ? "Please enter at least 8 characters, including an uppercase, lowercase, and special character": ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={togglePassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label=" Confirm Password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    error={!isConfirmPasswordValid}
                                    helperText={!isConfirmPasswordValid ? "Passwords do not match" : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={togglePassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid container justifyContent="center" mt={2}>
                                <Grid item>
                                    
                                        <Button type='submit' variant="contained" color="primary" disabled={!isEmailValid || !isPasswordValid || !isConfirmPasswordValid || !isUsernameValid || email ==='' || password === '' || confirmPassword === '' || username === ''}>
                                         Register 
                                        </Button>
                                   
                                </Grid>

                            </Grid>
                            <Grid container justifyContent="center" mt={2}>
                                <Grid item>
                                    <Link to='/'>
                                        <Button variant="contained" color="primary">
                                            Back to Login
                                        </Button>
                                    </Link>
                                </Grid>

                            </Grid>
                        </Grid>




                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default RegisterForm;