import React from "react";
import { Box } from "@mui/material";
import DashboardStats from "./widgets/StatsCard";
import { useTheme, useMediaQuery } from "@mui/material";

const Dashboard = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{
      minWidth: "100%", 
      height: "auto", 
      flexGrow: 1,
      p: 1,
    }} >
      <DashboardStats />
    </Box>
  )
};

export default Dashboard;
