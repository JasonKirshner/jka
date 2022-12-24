import './App.css';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Environ from './components/Environ/Environ'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <div class="main-content">
        <Services />
        <AboutMe />
        <Environ />
      </div>
      <Footer />
    </>
  );
}

export default App;
