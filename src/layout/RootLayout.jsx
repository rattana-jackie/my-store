import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollTop from "../ScrollTop";
import ScrollToTopBtn from "../ScrollToTopBtn";
const RootLayout = () => {
  return (
    <>
      <ScrollTop />
      <ScrollToTopBtn />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
