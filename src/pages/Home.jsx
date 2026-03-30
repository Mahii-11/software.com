import About from "../components/About";
import CoreCapabilities from "../components/CoreCapabilities";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import TrustedByLogos from "../components/TrustedByLogos";
//import { Technologies } from "../components/Technologies";
import TrustTeamSection from "../components/TrustTeamSection";


function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <TrustedByLogos />
      <Services />
      <About />
      <Portfolio />
      <TrustTeamSection/>
      <CoreCapabilities/>
    
    </div>
  );
}

export default Home;
