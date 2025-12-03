import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Offer from "./components/Offer";
import VideoSection from "./components/VideoSection";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";

export default function AgencyLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Offer />
      <VideoSection />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
}