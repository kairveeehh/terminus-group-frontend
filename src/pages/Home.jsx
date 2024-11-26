import React from "react";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import ContactSection from "../components/ContactUs";
import ProjectsGrid from "../components/ProjectGrid";
import HorizontalScrollCarousel from "../components/HorizontalScroll";
import OfficeComponent from "../components/OfficeGrid";
const Home = () => {
  return <div>
    <ContactSection />
    <StatsSection />
    <Footer />
    <ProjectsGrid />
    <HorizontalScrollCarousel />
    <ProjectsGrid />
    <OfficeComponent />
  </div>;
};

export default Home;
