import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

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
        gap: isSmallDevice ? 2 : 0,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} CodeEnclave • All Rights Reserved
      </Typography>

      <Box
        display="flex"
        gap={2}
        flexWrap="wrap"
        justifyContent={isSmallDevice ? "center" : "flex-end"}
      >
        <Typography
          component={Link}
          to="https://behan-portfolio.vercel.app"
          sx={{ cursor: "pointer", color: theme.palette.text.primary, textDecoration: "none" }}>
          Portfolio
        </Typography>
        <Typography
          component={Link}
          to="#"
          sx={{ cursor: "pointer", color: theme.palette.text.primary, textDecoration: "none" }}>
          About Us
        </Typography>
        <Typography
          component={Link}
          to="#"
          sx={{ cursor: "pointer", color: theme.palette.text.primary, textDecoration: "none" }}>
          Blog
        </Typography>
        <Typography
          component={Link}
          to="#"
          sx={{ cursor: "pointer", color: theme.palette.text.primary, textDecoration: "none" }}>
          License
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
