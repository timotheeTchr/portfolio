//Libraries
import Link from 'next/link';
import { useRouter } from 'next/router';

//Components from MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

const Header = () => {
  const router = useRouter();

  const links = [
    { linkLabel: 'accueil', route: '/' },
    { linkLabel: 'projets', route: '/projects' },
    { linkLabel: 'blog', route: '/blog' },
    { linkLabel: 'formations', route: '/courses' },
    { linkLabel: 'contact', route: '/contact' },
  ];

  const pagesLinks = links.map((page, index) => {
    return (
      <Typography
        sx={{
          position: 'relative',
          '&:hover': {
            color: 'tertiary.main',
          },
          '&::after': {
            content: '""',
            width: router.route === page.route ? '100%' : '0px',
            height: '1px',
            position: 'absolute',
            bottom: '0',
            right: '0',
            bgcolor: 'tertiary.main',
            transformOrigin: 'left',
            transition: 'all .3s',
          },
          '&:hover::after': {
            width: '100%',
            right: 'unset',
            left: '0',
          },
        }}
        variant='body1'
        color={
          router.route === page.route
            ? 'tertiary.main'
            : 'secondary.main'
        }
        fontWeight={
          router.route === page.route
            ? 'fontWeightBold'
            : 'fontWeightRegular'
        }
        textTransform='capitalize'
        key={index}
      >
        <Link href={page.route}>{page.linkLabel}</Link>
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
