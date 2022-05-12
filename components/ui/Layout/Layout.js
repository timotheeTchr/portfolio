//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />

      <div>{props.children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
