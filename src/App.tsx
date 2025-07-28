
import BlurredBackground from './components/BlurredBackground';
import Container from './components/Container';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurService from './components/our_service';
import Trending from './components/Trending';
import MobileDesign from './components/MobileDesign';
import Contact_us from './components/contact_us';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <>
      <BlurredBackground />
      <Container>
        <Navbar />
        <HeroSection />
        <OurService />
        <Trending />
        <MobileDesign />
        <Contact_us />
        <Footer />
      </Container>
    </>
  );
}

export default App;