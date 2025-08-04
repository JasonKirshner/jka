import './App.css';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Environ from './components/Environ/Environ'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import AddOns from './components/AddOns/AddOns';
import Instagram from './components/instagram/Instagram';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="main-content">
        <Services />
        <AddOns />
        <AboutMe />
        <Instagram />
        <Environ />
      </div>
      <Footer />
    </>
  );
}

export default App;
