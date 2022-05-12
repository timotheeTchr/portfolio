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
