import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md")); // ✅ Correct usage

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        display: "flex",
        justifyContent: isSmallDevice ? "center" : "space-between",
        flexDirection: isSmallDevice ? "column" : "row",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
        mt: "auto",
        borderTop: "1px solid #ccc",
        gap: isSmallDevice ? 2 : 0, // Adds spacing between items in column layout
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} CodeEnclave • All Rights Reserved
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap" justifyContent={isSmallDevice ? "center" : "flex-end"}>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: "none" }}>
          Get Theme
        </Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: "none" }}>
          About Us
        </Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: "none" }}>
          Blog
        </Typography>
        <Typography component={Link} to="#" sx={{ cursor: "pointer", textDecoration: "none" }}>
          License
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
