import { useEffect } from "react";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Services from "./components/services/Services.jsx";
import Banner from "./components/banner/Banner.jsx";
import AppStore from "./components/appStore/AppStore.jsx";
// import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
