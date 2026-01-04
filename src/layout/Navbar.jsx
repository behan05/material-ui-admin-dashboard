import React, { useEffect } from 'react';
import {
  AppBar, Box, IconButton, Toolbar, Typography,
  Avatar, Menu, MenuItem, Drawer, Paper, InputBase,
  Divider, Button, Switch,
  TextField
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
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';
import {
  updateSidebarButtonBgColor,
  updateSidebarBgColor,
  updateSNavPosition,
  toggleThemeMode
} from "../redux/settingSlice";
import { plPL } from '@mui/material/locale';

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

  const handleCloseUserMenu = () => {
    setAnchorUser(null)
    // navigate("/profile");
  };

  // Persist theme and navbar position
  useEffect(() => {
    const storedTheme = localStorage.getItem('themeMode');
    const storedNavPos = localStorage.getItem('navPosition');
    if (storedTheme && storedTheme !== themeMode) {
      dispatch(toggleThemeMode());
    }
    if (storedNavPos && storedNavPos !== navPosition) {
      dispatch(updateSNavPosition(storedNavPos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('navPosition', navPosition);
  }, [themeMode, navPosition]);

  const handleShare = (platform) => {
    if (!navigator.share) {
      alert('Web Share API not supported in this browser.');
      return;
    }
    const shareData = {
      title: 'Material UI Admin Dashboard',
      text: 'Check out this Material UI Admin Dashboard!',
      url: window.location.href,
    };
    platform === 'twitter' ?
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank')
      :
      navigator.share(shareData);
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
    >
      <Toolbar
        sx={{
          background: theme.palette.background.default,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
        }}>

        {/* Left: Logo and Toggle Sidebar */}
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
        >
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
              width: 220,
              height: 40,
              px: 1.5,
              borderRadius: 4,
              background: theme.palette.background.paper,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.25s ease',
              '&:focus-within': {
                borderColor: 'primary.main',
                boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.15)',
              },
            }}
          >
            <SearchIcon
              sx={{
                mr: 1,
                fontSize: 20,
                color: 'text.secondary',
              }}
            />

            <TextField
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search…"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: 14,
                  color: 'text.primary',
                },
              }}
              sx={{
                flex: 1,
              }}
            />
          </Paper>

        )}

        {/* Settings Button and Drawer */}
        <Box ml={4} display="flex" alignItems="center">
          <IconButton color='inherit' onClick={handleDrawerOpen} aria-label="open settings">
            <SettingsIcon fontSize='small' sx={{
            color: theme.palette.text.primary
          }} />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 320,
                background: theme.palette.background.default,
                color: 'text.primary',
                px: 3,
                pt: 3,
              },
            }}
          >
            {/* Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="h6" fontWeight={600}>
                UI Configurator
              </Typography>
              <IconButton onClick={handleDrawerClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Customize your dashboard appearance.
            </Typography>

            {/* Sidenav Colors */}
            <Box mb={4}>
              <Typography variant="subtitle2" fontWeight={600} mb={2}>
                Sidenav Colors
              </Typography>

              <Box display="flex" gap={1.5} flexWrap="wrap">
                {sidenavColors.map((color) => (
                  <Box
                    key={color}
                    onClick={() => dispatch(updateSidebarButtonBgColor(color))}
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      bgcolor: color,
                      cursor: 'pointer',
                      border: selectedSidebarColor === color
                        ? '2px solid'
                        : '2px solid transparent',
                      borderColor: selectedSidebarColor === color
                        ? 'primary.main'
                        : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Sidenav Type */}
            <Box mb={4}>
              <Typography variant="subtitle2" fontWeight={600} mb={1}>
                Sidenav Type
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Choose between different sidenav types.
              </Typography>

              <Box display="flex" gap={1} flexWrap="wrap">
                {[
                  {
                    type: 'DARK',
                    bg: 'linear-gradient(135deg, #0B0F14, #141A21)',
                    text: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000',
                  },
                  {
                    type: 'TRANSPARENT',
                    bg: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                    text: 'text.primary',
                  },
                  {
                    type: 'WHITE',
                    bg: 'linear-gradient(135deg, #FFFFFF, #F1F3F5)',
                    text: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000',
                  },
                ].map(({ type, bg, text }) => (
                  <Button
                    key={type}
                    variant="outlined"
                    onClick={() => dispatch(updateSidebarBgColor(bg))}
                    sx={{
                      minWidth: 90,
                      height: 40,
                      bgcolor: bg,
                      color: text,
                      borderRadius: 2,
                      borderColor: 'divider',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 0.6,
                      backdropFilter: type === 'TRANSPARENT' ? 'blur(6px)' : 'none',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: bg,
                        borderColor: 'primary.main',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {type}
                  </Button>
                ))}
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Navbar Fixed */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Typography variant="body2" fontWeight={500}>
                Navbar Fixed
              </Typography>
              <Switch
                checked={isNavbarFixed}
                onChange={() =>
                  dispatch(updateSNavPosition(isNavbarFixed ? 'static' : 'fixed'))
                }
                color="success"
              />
            </Box>

            {/* Theme Mode */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >
              <Typography variant="body2" fontWeight={500}>
                Reading Mode
              </Typography>
              <Switch
                checked={themeMode === 'dark'}
                onChange={() => dispatch(toggleThemeMode())}
                color="success"
              />
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Share Section */}
            <Box textAlign="center">
              <Typography variant="subtitle2" fontWeight={600} mb={2}>
                Thank you for sharing!
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                {[{ icon: <XIcon fontSize="small" />, label: 'twitter' },
                { icon: <ShareIcon fontSize="small" />, label: 'share' }].map(({ icon, label }) => (
                  <IconButton
                    key={label}
                    onClick={() => handleShare(label)}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: 'action.hover',
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Box>

            </Box>
          </Drawer>
        </Box>

        {/* Notifications */}
        <IconButton onClick={handleOpenNotif} color="inherit">
          <NotificationsIcon fontSize='small' sx={{
            color: theme.palette.text.primary
          }} />
        </IconButton>
        <Menu
          anchorEl={anchorNotif}
          open={Boolean(anchorNotif)}
          onClose={handleCloseNotif}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              background: theme.palette.background.paper,
              borderRadius: 2,
              p: 1
            }
          }}
        >
          <MenuItem
            onClick={handleCloseNotif}
            sx={{
              borderRadius: 2,
              "&:hover": {
                background: theme.palette.action.hover
              }
            }}
          >
            <MessageIcon
              fontSize='small'
              sx={{ mr: 1 }}
            />
            Check Messages
          </MenuItem>
          <MenuItem
            onClick={handleCloseNotif}
            sx={{
              borderRadius: 2,
              "&:hover": {
                background: theme.palette.action.hover
              }
            }}
          >
            <PodcastsIcon
              fontSize='small'
              sx={{ mr: 1 }}
            />
            Manage Podcasts
          </MenuItem>
          <MenuItem
            onClick={handleCloseNotif}
            sx={{
              borderRadius: 2,
              "&:hover": {
                background: theme.palette.action.hover
              }
            }}
          >
            <ShoppingCartIcon
              fontSize='small'
              sx={{ mr: 1 }}
            />
            Payment Completed
          </MenuItem>
        </Menu>

        {/* User Avatar */}
        <Avatar
          onClick={handleOpenUserMenu}
          alt="User"
          src='/developerImg.png'
          sx={{
            width: 35,
            height: 35,
            cursor: 'pointer',
            ml: 1,
            "&:hover": { opacity: 0.8 }
          }}
        />

        <Menu
          anchorEl={anchorUser}
          open={Boolean(anchorUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              background: theme.palette.background.paper,
              borderRadius: 2,
              p: 1
            }
          }}
        >
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NavLink}
            to="/profile"
            sx={{ textDecoration: "none", gap: 1, borderRadius: 2 }}> {<Person2Icon fontSize='small' />} Profile</MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NavLink}
            to="/setting"
            sx={{ textDecoration: "none", gap: 1, borderRadius: 2 }}> {<SettingsIcon fontSize='small' />} Settings</MenuItem>
          <MenuItem
            onClick={handleCloseUserMenu}
            component={NavLink}
            to="/logout"
            sx={{ textDecoration: "none", gap: 1, borderRadius: 2 }}> {<LogoutIcon fontSize='small' />} Logout</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
