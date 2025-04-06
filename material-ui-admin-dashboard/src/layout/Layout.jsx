import React from 'react';
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        {/* Sidebar */}
        <Grid item width={220}>
          <Sidebar />
        </Grid>

        {/* Main Content */}
        <Grid item>
          {/* Navbar stays on top */}
          <Navbar />

          {/* Page content */}

          <Box sx={{ mt: 8, p: 3 }}>
            <Outlet />
          </Box>

          {/* Footer at the bottom */}
          <Footer />
        </Grid>

      </Grid>
    </Box>
  )
}

export default Layout