import React, { useEffect } from 'react';
import {
  AppBar, Box, IconButton, Toolbar, Typography,
  Avatar, Menu, MenuItem, Drawer, Paper, InputBase,
  Divider, Button, Switch
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Menu as MenuIcon, Notifications as NotificationsIcon,
  Message as MessageIcon, Podcasts as PodcastsIcon,
  ShoppingCart as ShoppingCartIcon, Settings as SettingsIcon,
  Search as SearchIcon, Close as CloseIcon,
  Share as ShareIcon, X as XIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';
import {
  updateSidebarButtonBgColor,
  updateSidebarBgColor,
  updateSNavPosition,
  toggleThemeMode
} from "../redux/settingSlice";

// Constants
const sidenavColors = [
  "#A71347", "#0F59AC", "#FF0000", "#377F42",
  "#BD6E00", "#9B1210", "#1a8e88", "#6A1B9A",
  "#00838F", "#2E7D32",
];

function Navbar() {
  const dispatch = useDispatch();
  const navPosition = useSelector((state) => state.setting.defaultNavPosition);
  const isNavbarFixed = navPosition === "fixed";
  const themeMode = useSelector((state) => state.setting.themeMode);
  const selectedSidebarColor = useSelector((state) => state.setting.sidebarButtonBgColor);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorNotif, setAnchorNotif] = React.useState(null);
  const handleOpenNotif = (e) => setAnchorNotif(e.currentTarget);
  const handleCloseNotif = () => setAnchorNotif(null);

  const [anchorUser, setAnchorUser] = React.useState(null);
  const handleOpenUserMenu = (e) => setAnchorUser(e.currentTarget);
  const handleCloseUserMenu = () => setAnchorUser(null);

  // Persist theme and navbar position
  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode');
    const storedNavPos = localStorage.getItem('navPosition');
    if (storedTheme && storedTheme !== themeMode) {
      dispatch(toggleThemeMode()); // Assumes toggle works symmetrically
    }
    if (storedNavPos && storedNavPos !== navPosition) {
      dispatch(updateSNavPosition(storedNavPos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('navPosition', navPosition);
  }, [themeMode, navPosition]);

  return (
    <AppBar
      position={["fixed", "static", "absolute", "relative", "sticky"].includes(navPosition) ? navPosition : "fixed"}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ bgcolor: theme.palette.background.default }}>

        {/* Left: Logo and Toggle Sidebar */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            edge="start"
            color='inherit'
            aria-label="toggle sidebar"
            sx={{ display: isSmallScreen ? "inline-block" : "none" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component={NavLink}
            to="/"
            sx={{ color: "inherit", ml: 1, textDecoration: "none" }}
          >
            Dashboard
          </Typography>
        </Box>

        {/* Search Box */}
        {!isSmallScreen && (
          <Paper
            component="form"
            sx={{
              ml: 3,
              display: 'flex',
              alignItems: 'center',
              borderRadius: 2,
              width: 200,
              p: 1,
              bgcolor: theme.palette.background.default,
            }}
          >
            <SearchIcon sx={{ ml: 1, mr: 1, color: '#fff' }} />
            <InputBase
              placeholder="Search here"
              value={searchTerm}
              onChange={handleSearchChange}
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: '#fff', flex: 1 }}
            />
          </Paper>
        )}

        {/* Settings Button and Drawer */}
        <Box ml={4} display="flex" alignItems="center">
          <IconButton color='inherit' onClick={handleDrawerOpen} aria-label="open settings">
            <SettingsIcon />
          </IconButton>

          <Drawer
            anchor='right'
            open={drawerOpen}
            onClose={handleDrawerClose}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 'auto',
                bgcolor: theme.palette.background.default,
                color: 'inherit',
                paddingTop: '64px',
                px: 2,
                mt: 2
              }
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant='h6'>Material UI Configurator</Typography>
              <IconButton onClick={handleDrawerClose} sx={{ color: "inherit" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography variant='body2' color='text.secondary'>See our dashboard options.</Typography>
            <Divider sx={{ my: 2, borderColor: '#444' }} />

            {/* Sidenav Colors */}
            <Typography variant="subtitle1" gutterBottom>Sidenav Colors</Typography>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {sidenavColors.map((color, i) => (
                <Box
                  key={i}
                  onClick={() => dispatch(updateSidebarButtonBgColor(color))}
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: color,
                    cursor: 'pointer',
                    border: selectedSidebarColor === color ? '2px solid #00e676' : '2px solid transparent',
                    '&:hover': { border: '2px solid #ffffff' }
                  }}
                />
              ))}
            </Box>

            {/* Sidenav Type */}
            <Box mt={4}>
              <Typography variant="subtitle1">Sidenav Type</Typography>
              <Typography variant="body2" mb={2}>Choose between different sidenav types.</Typography>
              <Box display="flex" gap={1}>
                {['DARK', 'TRANSPARENT', 'WHITE'].map((type, i) => {
                  let bgColor = "";
                  if (type === 'TRANSPARENT') bgColor = "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(173, 216, 230, 0.1))";
                  if (type === 'WHITE') bgColor = "linear-gradient(120deg, #232526, #AAAFBA)";
                  if (type === 'DARK') bgColor = "linear-gradient(to right,#010101, #0E0604)";
                  return (
                    <Button
                      key={i}
                      variant='outlined'
                      onClick={() => dispatch(updateSidebarBgColor(bgColor))}
                      sx={{
                        background: bgColor,
                        color: type === 'WHITE' ? '#000' : '#CCC',
                        borderRadius: 2,
                        boxShadow: "0 0 0.2rem lightseagreen",
                        "&:hover": {
                          boxShadow: "0 2px 0.2rem lightseagreen",
                        },
                      }}
                    >
                      {type}
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* Navbar Fixed Toggle */}
            <Divider sx={{ my: 2, borderColor: '#444' }} />
            <Box display='flex' justifyContent="space-between" alignItems="center">
              <Typography>Navbar Fixed</Typography>
              <Switch
                checked={isNavbarFixed}
                onChange={() =>
                  dispatch(updateSNavPosition(isNavbarFixed ? "static" : "fixed"))
                }
                color="success"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#00e676',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#555',
                  }
                }}
              />
            </Box>

            {/* Theme Toggle */}
            <Box display='flex' justifyContent="space-between" alignItems="center" mt={2}>
              <Typography>Dark Mode</Typography>
              <Switch
                checked={themeMode === 'dark'}
                onChange={() => dispatch(toggleThemeMode())}
                color="success"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#00e676',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#00e676',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#555',
                  },
                }}
              />
            </Box>

            {/* Share Section */}
            <Box textAlign="center" mt={8}>
              <Typography variant="subtitle1" gutterBottom>Thank you for sharing!</Typography>
              <Box display="flex" justifyContent="center" gap={1}>
                <Button variant='outlined' startIcon={<XIcon />} sx={{
                  bgcolor: "#000", color: "inherit", borderRadius: 2,
                  boxShadow: "0 0 0.2rem lightseagreen", "&:hover": {
                    boxShadow: "0 2px 0.2rem lightseagreen"
                  }
                }}>TWITTER</Button>
                <Button variant='outlined' startIcon={<ShareIcon />} sx={{
                  bgcolor: "#000", color: "inherit", borderRadius: 2,
                  boxShadow: "0 0 0.2rem lightseagreen", "&:hover": {
                    boxShadow: "0 2px 0.2rem lightseagreen"
                  }
                }}>SHARE</Button>
              </Box>
            </Box>
          </Drawer>
        </Box>

        {/* Notifications */}
        <IconButton onClick={handleOpenNotif} color="inherit">
          <NotificationsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorNotif}
          open={Boolean(anchorNotif)}
          onClose={handleCloseNotif}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleCloseNotif}><MessageIcon sx={{ mr: 1 }} /> Check Messages</MenuItem>
          <MenuItem onClick={handleCloseNotif}><PodcastsIcon sx={{ mr: 1 }} /> Manage Podcasts</MenuItem>
          <MenuItem onClick={handleCloseNotif}><ShoppingCartIcon sx={{ mr: 1 }} /> Payment Completed</MenuItem>
        </Menu>

        {/* User Avatar */}
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="User"
            src="https://avatars.githubusercontent.com/u/83676505?v=4"
            sx={{ width: 40, height: 40 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorUser}
          open={Boolean(anchorUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
