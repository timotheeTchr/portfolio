//Libraries
import Link from 'next/link';

//Components from MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Header = () => {
  const pages = [
    'accueil',
    'portfolio',
    'blog',
    'formations',
    'contact',
  ];

  const pagesLinks = pages.map((page, index) => {
    return (
      <Typography
        variant='body1'
        color='secondary.main'
        textTransform='capitalize'
        key={index}
      >
        <Link href={'/' + page}>{page}</Link>
      </Typography>
    );
  });

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
      }}
      position='sticky'
    >
      <Toolbar
        sx={{
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
          }}
          variant='h5'
          color='secondary.main'
          fontWeight='fontWeightBold'
        >
          Timcode
        </Typography>

        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
          }}
          direction='row'
          spacing={4}
        >
          {pagesLinks}
        </Stack>

        <Stack
          direction='row'
          spacing={1}
          divider={
            <Divider
              sx={{ bgcolor: 'secondary.main' }}
              orientation='vertical'
              flexItem
            />
          }
        >
          <Typography color='secondary.main'>Se connecter</Typography>

          <Typography
            color='tertiary.main'
            fontWeight='fontWeightBold'
          >
            S'inscrire
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
