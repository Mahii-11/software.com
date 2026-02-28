import About from "../components/About";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { Technologies } from "../components/Technologies";
import TrustTeamSection from "../components/TrustTeamSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Technologies />
      <Services />
      <About />
      <Portfolio />
      <TrustTeamSection/>
    </div>
  );
}

export default Home;
