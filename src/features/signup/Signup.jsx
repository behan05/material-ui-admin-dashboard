import React, { useState } from 'react';
import {
    Box, TextField, Button, Typography, Divider, useTheme, Stack
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

function Signup() {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        // Add form validation later
    };

    const handleSocialSignup = (platform) => {
        console.log(`Signup with ${platform}`);
    };

    return (
        <Box
            sx={{
                maxWidth: 420,
                margin: "auto",
                mt: 8,
                p: 4,
                borderRadius: 3,
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                bgcolor: theme.palette.background.default,
                boxShadow: "0 0 6px #ccc"
            }}
        >
            <Typography variant="h5" mb={3} textAlign="center">
                Create Account
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    margin="normal"
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Sign Up
                </Button>
            </form>

            <Box textAlign="center" mt={2}>
                <Typography variant="body2">
                    Already have an account?{' '}
                    <Link to="/login" underline="hover">Login</Link>
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Stack spacing={1.5}>
                <Button
                    fullWidth
                    startIcon={<GoogleIcon />}
                    variant="outlined"
                    bgcolor = {theme.palette.background.default}
                    onClick={() => handleSocialSignup("Google")}
                >
                    Sign up with Google
                </Button>
                <Button
                    fullWidth
                    startIcon={<GitHubIcon />}
                    variant="outlined"
                    bgcolor = {theme.palette.background.default}
                    onClick={() => handleSocialSignup("GitHub")}
                >
                    Sign up with GitHub
                </Button>
                <Button
                    fullWidth
                    startIcon={<FacebookIcon />}
                    variant="outlined"
                    bgcolor = {theme.palette.background.default}
                    onClick={() => handleSocialSignup("Facebook")}
                >
                    Sign up with Facebook
                </Button>
            </Stack>
        </Box>
    );
}

export default Signup;
