import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollTop from "../ScrollTop";
const RootLayout = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
