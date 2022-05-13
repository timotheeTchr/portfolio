//Components from MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const blog = () => {
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
        Blog
      </Typography>
    </Box>
  );
};

export default blog;