//Components from MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const courses = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'primary.main'
      }}
    >
      <Typography
        variant='h1'
        color='secondary.main'
      >
        Formations
      </Typography>
    </Box>
  );
};

export default courses;