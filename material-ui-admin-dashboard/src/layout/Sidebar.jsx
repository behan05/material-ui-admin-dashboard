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
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useMediaQuery, useTheme } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';
import { updateSNavPosition } from "../redux/settingSlice";

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Table', icon: <TableChartIcon />, path: '/table' },
  { text: 'Billing', icon: <ReceiptLongIcon />, path: '/billing' },
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { text: 'Login', icon: <ExitToAppIcon />, path: '/login' },
  { text: 'Sign Up', icon: <HowToRegIcon />, path: '/signup' },
];

const Sidebar = () => {

  // Redux State
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const currentBgColor = useSelector((state) => state.setting.defaultSidebarButtonBgColor);
  const currentSidearBgColor = useSelector((state) => state.setting.defaultSidebarBgColor)
  const currentNavPosition = useSelector((state) => state.setting.defaultNavPosition);
  console.log(currentNavPosition);


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      open={isSmallScreen ? isSidebarOpen : true} // permanent always open
      onClose={() => dispatch(toggleSidebar())}
      sx={{
        '& .MuiDrawer-paper': {
          width: 220,
          boxSizing: 'border-box',
          background: currentSidearBgColor,
          color: "white",
          mt: currentNavPosition === "fixed" ? 7 : 0,
          p: 1
        }
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
          <SpaceDashboardIcon />DASHBOARD
        </Typography>
      </Box>
      <Divider sx={{ borderColor: '#333' }} />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            onClick={isSmallScreen ? () => dispatch(toggleSidebar()) : undefined} // close on item click
            sx={{
              color: '#fff',
              '&.active': {
                backgroundColor: currentBgColor,
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
