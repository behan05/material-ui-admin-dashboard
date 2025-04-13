import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {

  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
        mt: "auto", // Push footer to the bottom if page content is short
        borderTop: "1px solid #ccc",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} CodeEnclave • All Rights Reserved
      </Typography>

      <Box display="flex" gap={2}>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: 'none' }}>Get Theme</Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: 'none' }}>About Us</Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: 'none' }}>Blog</Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: 'none' }}>License</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
