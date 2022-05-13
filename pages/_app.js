//Libraries
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/Theme/theme';
import '../styles/default.css';

//Components
import Layout from '../components/ui/Layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
