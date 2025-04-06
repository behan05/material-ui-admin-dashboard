import React from 'react';
import {
  AppBar, Box, IconButton, Toolbar, Typography,
  Avatar, Menu, MenuItem, Drawer, Paper, InputBase, Divider, Button
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Menu as MenuIcon, Notifications as NotificationsIcon,
  Message as MessageIcon, Podcasts as PodcastsIcon,
  ShoppingCart as ShoppingCartIcon, Settings as SettingsIcon,
  Search as SearchIcon, Close as CloseIcon, ToggleOn as ToggleOnIcon,
  Share as ShareIcon, X as XIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/uiSlice';

function Navbar() {
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorNotif, setAnchorNotif] = React.useState(null);
  const handleOpenNotif = (e) => setAnchorNotif(e.currentTarget);
  const handleCloseNotif = () => setAnchorNotif(null);

  const [anchorUser, setAnchorUser] = React.useState(null);
  const handleOpenUserMenu = (e) => setAnchorUser(e.currentTarget);
  const handleCloseUserMenu = () => setAnchorUser(null);

  const sidenavColors = ["#A71347", "#3a3d3f", "#0F59AC", "#377F42", "#BD6E00", "#9B1210"];

  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>

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
              width: 200,
              p: 1,
              backgroundColor: 'rgba(255,255,255,0.15)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' },
              color: '#fff'
            }}
          >
            <SearchIcon sx={{ ml: 1, mr: 1, color: '#fff' }} />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: '#fff', flex: 1 }}
            />
          </Paper>
        )}

        {/* Settings Drawer Button */}
        <Box ml={4} display="flex" alignItems="center">
          <IconButton color='inherit' onClick={handleDrawerOpen} aria-label="open settings">
            <SettingsIcon />
          </IconButton>

          <Drawer
            anchor='right'
            open={drawerOpen}
            onClose={handleDrawerClose}
            sx={{
              '& .MuiDrawer-paper': {
                width: 'auto',
                backgroundColor: '#1A2027',
                color: 'inherit',
                paddingTop: '64px',
                px: 2,
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
                <Box key={i} sx={{
                  width: 20, height: 20, borderRadius: '50%',
                  backgroundColor: color, cursor: 'pointer',
                  '&:hover': { border: '2px solid #ffffff' }
                }} />
              ))}
            </Box>

            {/* Sidenav Type */}
            <Box mt={4}>
              <Typography variant="subtitle1">Sidenav Type</Typography>
              <Typography variant="body2" mb={2}>Choose between different sidenav types.</Typography>
              <Box display="flex" gap={1}>
                {['DARK', 'TRANSPARENT', 'WHITE'].map((type, i) => (
                  <Button
                    key={i}
                    variant='contained'
                    sx={{
                      bgcolor: "#000",
                      borderRadius: 2,
                      boxShadow: "0 0 0.2rem lightseagreen",
                      "&:hover": {
                        boxShadow: "0 2px 0.2rem lightseagreen",
                      }
                    }}
                  >
                    {type}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Toggles */}
            {[
              { label: "Navbar Fixed" },
              { label: "Light / Dark" }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <Divider sx={{ my: 2, borderColor: '#444' }} />
                <Box display='flex' justifyContent="space-between" alignItems="center">
                  <Typography>{item.label}</Typography>
                  <ToggleOnIcon sx={{ fontSize: "2.5rem" }} />
                </Box>
              </React.Fragment>
            ))}

            {/* Share Section */}
            <Box textAlign="center" mt={8}>
              <Typography variant="subtitle1" gutterBottom>Thank you for sharing!</Typography>
              <Box display="flex" justifyContent="center" gap={1}>
                <Button variant='outlined' startIcon={<XIcon />}
                  sx={{
                    bgcolor: "#000", color: "inherit", borderRadius: 2,
                    boxShadow: "0 0 0.2rem lightseagreen", "&:hover": {
                      boxShadow: "0 2px 0.2rem lightseagreen"
                    }
                  }}
                >
                  TWITTER
                </Button>
                <Button variant='outlined' startIcon={<ShareIcon />}
                  sx={{
                    bgcolor: "#000", color: "inherit", borderRadius: 2,
                    boxShadow: "0 0 0.2rem lightseagreen", "&:hover": {
                      boxShadow: "0 2px 0.2rem lightseagreen"
                    }
                  }}
                >
                  SHARE
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Box>

        {/* Notifications */}
        <IconButton onClick={handleOpenNotif} color="inherit" aria-label="open notifications">
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
        <IconButton onClick={handleOpenUserMenu} aria-label="open user menu">
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
