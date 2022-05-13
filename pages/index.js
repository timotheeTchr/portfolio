//Components from MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const index = () => {
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
        Accueil
      </Typography>
    </Box>
  );
};

export default index;
