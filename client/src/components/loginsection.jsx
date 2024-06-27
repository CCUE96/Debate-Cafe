import { useState } from 'react';
import { Paper, Grid, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log(email, password);
    };
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <Grid container justifyContent="center" style={{ minHeight: '100vh' }} mt={12}>
            <Grid item xs={10} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    <Link to='/'>
                                        <Button variant="contained" color="primary">
                                            Login
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center" mt={2}>
                                        <Grid item>
                                            <Link to='/register'>
                                                <Button variant="contained" color="primary">
                                                    Or Register Here
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>




                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default LoginForm;