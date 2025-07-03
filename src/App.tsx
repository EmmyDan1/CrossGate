import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Homepage = lazy(() => import("./pages/Homepage"));
const OurStory = lazy(() => import("./pages/about/OurStory"));
const HowItWorks = lazy(() => import("./pages/about/HowItWorks"));
const SectorsAndProductPage = lazy(
  () => import("./pages/SectorsAndProductPage")
);
const ServicePage = lazy(() => import("./pages/ServicePage"));
const BlogSection = lazy(() => import("./pages/insights/Blog"));
const SuccessStories = lazy(() => import("./pages/insights/success-story"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Team = lazy(() => import("./pages/about/Team"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
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
      {/* <Suspense fallback={<LoadingSpinner />}>
      </Suspense> */}
      <Footer />
    </div>
  );
}

export default App;
