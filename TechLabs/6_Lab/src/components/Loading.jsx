import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <CircularProgress />
      <Typography variant="body1" sx={{ mt: 2 }}>
        Loading students...
      </Typography>
    </Box>
  );
}
