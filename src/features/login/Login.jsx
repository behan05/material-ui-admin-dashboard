import { useState } from 'react';
import {
    Box, TextField, Button, Typography, IconButton, Tooltip, Divider, useTheme, Stack
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

function Login() {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const handleSocialLogin = (platform) => {
        console.log(`Login with ${platform}`);
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                margin: "auto",
                mt: 8,
                p: 4,
                borderRadius: 3,
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                bgcolor: theme.palette.background.paper,
            }}
        >
            <Typography variant="h5" mb={3} textAlign="center">
                Login
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    size='small'
                    fullWidth
                    label="Email"
                    type="email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    size='small'
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box textAlign="right" mt={1}>
                    <Link to="/" underline="hover" fontSize={14}>
                        Forgot Password?
                    </Link>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </form>

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

export default Login;
