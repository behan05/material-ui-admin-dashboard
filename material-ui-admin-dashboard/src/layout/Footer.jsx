import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        mt: "auto", // Push footer to the bottom if page content is short
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} CodeEnclave • All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
