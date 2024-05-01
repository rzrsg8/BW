import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const App = () => {
  return (
    <>
     <TonConnectUIProvider manifestUrl="https://github.com/rzrsg8/BW/blob/main/src/manifest.json">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
      </TonConnectUIProvider>
    </>
  );
};

export default App;
