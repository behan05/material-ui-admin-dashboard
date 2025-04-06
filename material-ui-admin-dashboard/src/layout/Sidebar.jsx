import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TuneIcon from '@mui/icons-material/Tune';
import { useMediaQuery, useTheme } from '@mui/material';

import { useSelector } from 'react-redux';

const drawerWidth = "auto";

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Table', icon: <TableChartIcon />, path: '/table' },
  { text: 'Billing', icon: <ReceiptLongIcon />, path: '/billing' },
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { text: 'Setting', icon: <TuneIcon />, path: '/setting' },
];

const Sidebar = () => {

  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // md = 900px

  return (
    <Drawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      anchor="left"
      open={isDesktop ? true : isSidebarOpen}
      onClose={() => { }} // optional, or you can handle it if needed for mobile
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: '#1A2027',
          color: 'inherit',
          paddingTop: '64px',
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <SpaceDashboardIcon /> MUI Dashboard
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#333' }} />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: '#fff',
              '&.active': {
                backgroundColor: '#2D3748',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
