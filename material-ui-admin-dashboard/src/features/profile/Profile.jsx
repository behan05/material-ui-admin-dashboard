import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Grid,
  Paper,
  Tooltip,
  IconButton,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PlateformSetting from "./PlateformSetting";
import ProfileInformation from "./ProfileInformation";
import Conversations from "./Conversations";

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const coverStyle = {
    width: "100%",
    height: isSmallScreen ? 240 : 300,
    objectFit: "cover",
    borderRadius: 20,
    boxShadow: 3,
  };

  return (
    <Box p={3} sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Cover Image */}
      <Box position="relative">
        <img
          src="./public/coverImage.jpg"
          alt="profile cover"
          style={coverStyle}
        />

        {/* Profile Header - slightly overlapped below cover */}
        <Box
          mt={-8}
          position="relative"
          sx={{
            width: "95%",
            mx: "auto",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.background.default,
              boxShadow: 4
            }}
          >
            {/* Header Grid */}
            <Grid container spacing={3} alignItems="center" flexWrap="wrap">
              {/* Avatar + Name */}
              <Grid item display="flex" flexGrow={1}>
                <Avatar
                  src="/developerImg.png"
                  alt="Profile"
                  sx={{
                    width: 100,
                    height: 100,
                    '& img': {
                      objectFit: 'cover'
                    }
                  }}
                />
                <Box ml={2}>
                  <Typography variant="h5" fontWeight={600}>Behan Kumar</Typography>
                  <Typography variant="subtitle1" color="text.secondary">Full-Stack Developer</Typography>
                  <Tooltip title="Edit Profile">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="label">Edit</Typography>
                      <IconButton>
                        <EditNoteIcon />
                      </IconButton>
                    </Box>
                  </Tooltip>
                </Box>
              </Grid>

              {/* Action Buttons */}
              <Grid item xs display="flex" gap={2} justifyContent="flex-end">
                <Button variant="outlined" color="primary" sx={theme.palette.background.default} startIcon={<HomeIcon />}>
                  App
                </Button>
                <Button variant="outlined" sx={theme.palette.background.default} color="primary" startIcon={<MessageIcon />}>
                  Message
                </Button>
                <Button variant="outlined" sx={theme.palette.background.default} color="primary" startIcon={<SettingsIcon />}>
                  Settings
                </Button>
              </Grid>
            </Grid>

            {/* Three-Column Info Section */}
            <Box display="grid" gridTemplateColumns={"repeat(auto-fit, minmax(280px, 1fr))"} gap={3} mt={3} flexWrap={"wrap"}>
              <PlateformSetting />
              <ProfileInformation />
              <Conversations />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
