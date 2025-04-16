import React from 'react';
import {
  Drawer, Box, Typography, Divider, List, ListItemButton,
  ListItemIcon, ListItemText, Collapse
} from '@mui/material';
import {
  SpaceDashboard as SpaceDashboardIcon,
  BarChart as BarChartIcon,
  ExpandLess,
  ExpandMore,
  Layers as LayersIcon,
  Assessment as AssessmentIcon,
  Help as HelpIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import Person2Icon from '@mui/icons-material/Person2';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const currentBgColor = useSelector((state) => state.setting.defaultSidebarButtonBgColor);
  const currentNavPosition = useSelector((state) => state.setting.defaultNavPosition);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [openMore, setOpenMore] = React.useState(false);
  const toggleMoreOptions = () => setOpenMore(!openMore);

  const menuItems = [
    { text: 'Dashboard', icon: <SpaceDashboardIcon />, path: '/' },
    { text: 'Tables', icon: <BackupTableIcon />, path: '/tables' },
    { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
    { text: 'Profile', icon: <Person2Icon />, path: '/profile' },
    { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
    { text: 'Logs', icon: <HistoryIcon />, path: '/logs' },
    { text: 'Login', icon: <LoginIcon />, path: '/login' },
    { text: 'Sign up', icon: <LockIcon />, path: '/signup' },
  ];

  const moreItems = [
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Integrations', icon: <LayersIcon />, path: '/integrations' },
    { text: 'Support', icon: <HelpIcon />, path: '/support' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
  ];

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      open={isSmallScreen ? isSidebarOpen : true}
      onClose={() => dispatch(toggleSidebar())}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          mt: currentNavPosition === "fixed" ? 7 : 0,
          p: 1,
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <PivotTableChartIcon /> DASHBOARD
        </Typography>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            onClick={isSmallScreen ? () => dispatch(toggleSidebar()) : undefined}
            sx={{
              color: theme.palette.text.primary,
              '&.active': {
                backgroundColor: currentBgColor,
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.primary }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}

        {/* More Options Toggle */}
        <ListItemButton onClick={toggleMoreOptions}>
          <ListItemIcon sx={{ color: theme.palette.text.primary }}>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="More Options" />
          {openMore ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {moreItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={NavLink}
                to={item.path}
                onClick={isSmallScreen ? () => dispatch(toggleSidebar()) : undefined}
                sx={{
                  pl: 4,
                  color: theme.palette.text.primary,
                  '&.active': {
                    backgroundColor: currentBgColor,
                  },
                }}
              >
                <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
