import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import OurStory from "./pages/about/OurStory";
import HowItWorks from "./pages/about/HowItWorks";
import SectorsAndProductPage from "./pages/SectorsAndProductPage";
import ServicePage from "./pages/ServicePage";
import BlogSection from "./pages/insights/Blog";
import SuccessStories from "./pages/insights/success-story";
import ContactPage from "./pages/ContactPage";
import Team from "./pages/about/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/sectors-and-product"
          element={<SectorsAndProductPage />}
        />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/insights/blog" element={<BlogSection />} />
        <Route path="/insights/success-story" element={<SuccessStories />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
