import AboutMe from '../components/AboutMe/AboutMe'
import Environ from '../components/Environ/Environ'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <div class="main-content">
        <AboutMe />
        <Services />
        <Environ />
      </div>
    </>
  )
}

export default Home