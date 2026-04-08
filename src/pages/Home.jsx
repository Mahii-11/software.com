import About from "../components/About";
import CoreCapabilities from "../components/CoreCapabilities";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import TrustedByLogos from "../components/TrustedByLogos";



function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Hero />
      <TrustedByLogos />
      <Services />
      <About />
      <Portfolio />
      <CoreCapabilities/>  
    </div>
  );
}

export default Home;
