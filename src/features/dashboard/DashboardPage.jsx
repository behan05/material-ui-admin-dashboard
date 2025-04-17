import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardStats from "./widgets/StatsCard";
import ChartBox from "./widgets/ChartBox";
import { projectTableData } from "../../data/dashboardTableData";
import DashboardTable from "../../components/Table/DashboardTable";
import OrdersOverview from "../../components/OrdersOverview/OrdersOverview";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme()

  const handleSettingsClick = () => {
    // Setting Logic Here...
  };

  return (
    <>
      <Box sx={{
        minWidth: "100%",
        height: "auto",
        flexGrow: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }} >
        <DashboardStats />
        <ChartBox />
        <Box display="flex" gap={2} flexWrap="wrap">
          <Box flex={2} minWidth={300}>
            <DashboardTable data={projectTableData} />
          </Box>
          <Box flex={1} minWidth={250}>
            <OrdersOverview />
          </Box>
        </Box>
      </Box>

      {/* Floating Settings Icon */}
      <Tooltip title="Settings">
        <IconButton
          onClick={handleSettingsClick}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1300,
            bgcolor: theme.palette.background.default,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: 4,
            '&:hover': {
              bgcolor: 'background.default',
            },
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Dashboard;
