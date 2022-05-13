//Libraries
import Link from 'next/link';

//Components from MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

const Header = () => {
  const links = [
    { linkName: 'accueil', slug: '/' },
    { linkName: 'projets', slug: '/projects' },
    { linkName: 'blog', slug: '/blog' },
    { linkName: 'formations', slug: '/courses' },
    { linkName: 'contact', slug: '/contact' },
  ];

  const pagesLinks = links.map((page, index) => {
    return (
      <Typography
        variant='body1'
        color='secondary.main'
        textTransform='capitalize'
        key={index}
      >
        <Link href={page.slug}>{page.linkName}</Link>
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
      <Container maxWidth='xl'>
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
            spacing={5}
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
            <Typography color='secondary.main'>
              Se connecter
            </Typography>

            <Typography
              color='tertiary.main'
              fontWeight='fontWeightBold'
            >
              S'inscrire
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
