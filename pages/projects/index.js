//Components from MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const projects = () => {
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
        Projets
      </Typography>
    </Box>
  );
};

export default projects;