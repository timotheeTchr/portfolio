//Libraries
import '../styles/default.css';

//Components
import Layout from '../components/ui/Layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
