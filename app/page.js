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
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-300 selection:text-zinc-900">
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