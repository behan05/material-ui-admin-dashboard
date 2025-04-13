import React from 'react';
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

const DRAWER_WIDTH = 250;

const Layout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // <900px

  return (
    <Box sx={{ display: 'flex', bgcolor: theme.palette.background.default }}>

      {/* Always render Sidebar to allow temporary variant on small screens */}
      <Sidebar />

      {/* Main content wrapper */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: isSmallScreen ? '100%' : `calc(100% - ${DRAWER_WIDTH}px)`,
          ml: isSmallScreen ? 0 : `${DRAWER_WIDTH}px`, // push content when sidebar is permanent
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: isSmallScreen ? 4 : 3,
            p: isSmallScreen ? 1 : 4,
          }}
        >
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
