import React from "react";
import {
  Box,
  Typography,
  useTheme,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

function platformSetting() {
  const theme = useTheme();

  // Example switch state (optional, we can add logic later)
  const [settings, setSettings] = React.useState({
    follow: true,
    answer: false,
    mention: true,
    launches: false,
    updates: true,
    newsletter: true
  });

  const handleChange = (event) => {
    setSettings({ ...settings, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="body1" color={theme.palette.text.secondary}>
        Platform Settings
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        ACCOUNT
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.follow}
              onChange={handleChange}
              name="follow"
            />
          }
          label="Email me when someone follows me"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.answer}
              onChange={handleChange}
              name="answer"
            />
          }
          label="Email me when someone answers on my post"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.mention}
              onChange={handleChange}
              name="mention"
            />
          }
          label="Email me when someone mentions me"
        />
      </FormGroup>

      {/* Application Section */}
      <Box pt={4}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          APPLICATION
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={settings.launches}
                onChange={handleChange}
                name="launches"
              />
            }
            label="New launches and projects"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.updates}
                onChange={handleChange}
                name="updates"
              />
            }
            label="Monthly product updates"
          />
          <FormControlLabel
            control={
              <Switch
                checked={settings.newsletter}
                onChange={handleChange}
                name="newsletter"
              />
            }
            label="Subscribe to newsletter"
          />
        </FormGroup>
      </Box>
    </Box>

  )
}

export default platformSetting