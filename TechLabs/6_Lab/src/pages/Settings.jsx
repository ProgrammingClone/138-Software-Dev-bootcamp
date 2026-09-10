import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Switch,
  Slider,
  Checkbox,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SaveIcon from "@mui/icons-material/Save";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [volume, setVolume] = useState(30);
  const [newsletter, setNewsletter] = useState(true);
  const [language, setLanguage] = useState("en");

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Box display="flex" flexDirection="column" gap={3}>

        {/* Dark Mode */}
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          }
          label={
            <Box display="flex" alignItems="center" gap={1}>
              <Brightness4Icon /> Dark Mode
            </Box>
          }
        />

        {/* Volume Slider */}
        <Box>
          <Typography gutterBottom display="flex" alignItems="center" gap={1}>
            <VolumeUpIcon /> Volume
          </Typography>
          <Slider
            value={volume}
            onChange={(e, val) => setVolume(val)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
        </Box>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
          }
          label="Subscribe to newsletter"
        />

        {/* Select */}
        <FormControl>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>
        </FormControl>

        {/* TextField */}
        <TextField label="Your Name" variant="outlined" />

        {/* Save Button */}
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() =>
            alert(
              `Saved: darkMode=${darkMode}, volume=${volume}, newsletter=${newsletter}, language=${language}`
            )
          }
        >
          Save Settings
        </Button>
      </Box>
    </Container>
  );
}
