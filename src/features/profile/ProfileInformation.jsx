import React from 'react'
import {
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function ProfileInformation() {

  const theme = useTheme()
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" gap={2}>
      {/* Profile Information Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" width="100%">
        <Typography variant="body1" color={theme.palette.text.secondary}>
          Profile Information
        </Typography>
        <IconButton sx={{ marginLeft: 'auto' }}>
          <EditNoteIcon sx={{ color: theme.palette.text.secondary }} />
        </IconButton>
      </Box>

      <Typography variant="body1" mb={1} color={theme.palette.text.primary}>
        Hi, I'm Behan Kumar, Full-Stack Developer. I believe that learning is a lifelong process, and my goal is to constantly grow and share knowledge with others. The most important thing is to keep moving forward.
      </Typography>

      {/* Profile Details */}
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Full Name:</strong> Behan Kumar
        </Typography>
        <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Mobile:</strong> (+91) 896 xxx xxxx
        </Typography>
        <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Email:</strong> behan@xxxx.com
        </Typography>
        <Typography variant="body2" color={theme.palette.text.primary}>
          <strong>Location:</strong> India / new delhi
        </Typography>

        <Box display="flex" alignItems={"center"}>
          <Typography variant="body2" color={theme.palette.text.primary}>
            <strong>Social:</strong>
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mt={0.5}>
            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
              <XIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileInformation;