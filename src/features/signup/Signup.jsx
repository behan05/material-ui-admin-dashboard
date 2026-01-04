import { useState } from 'react';
import {
    Box, TextField, Button, Tooltip, Typography,IconButton, Divider, useTheme, Stack
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
                p: 4,
                borderRadius: 3,
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                bgcolor: theme.palette.background.paper,
            }}
        >
            <Typography variant="h5" mb={3} textAlign="center">
                Create Account
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    size="small"
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    size="small"
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    size="small"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    size="small"
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

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                {[
                    { name: 'Google', icon: <GoogleIcon /> },
                    { name: 'GitHub', icon: <GitHubIcon /> },
                    { name: 'Facebook', icon: <FacebookIcon /> },
                ].map(({ name, icon }) => (
                    <Tooltip key={name} title={`Sign up with ${name}`} arrow>
                        <IconButton
                            onClick={() => handleSocialSignup(name)}
                            sx={{
                                width: 44,
                                height: 44,
                                borderRadius: 2,
                                bgcolor: 'action.hover',
                                color: 'text.primary',
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                    bgcolor: 'action.selected',
                                    transform: 'translateY(-2px)',
                                },
                                '&:active': {
                                    transform: 'translateY(0)',
                                },
                            }}
                        >
                            {icon}
                        </IconButton>
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    );
}

export default Signup;
