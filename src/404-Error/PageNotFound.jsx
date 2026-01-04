import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Box
      minHeight="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        background: 'linear-gradient(to right, #280d4bff, #982a80ff)',
        color: '#fff',
        borderRadius: 10
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </Typography>
      <Button
        component={NavLink}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: '#ffffff',
          color: '#2a5298',
          fontWeight: 'bold',
          px: 4,
          py: 1.5,
          borderRadius: '30px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          }
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
