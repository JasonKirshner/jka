import './styles.css'
import LazyLoad from 'react-lazy-load'

const Hero = () => {
  return (
    <div class="hero">
      <LazyLoad>
        <img class="hero-image image" src='/images/hero.jpeg' alt="Spa room" />
      </LazyLoad>
      <h1 class="hero-title">Joanna Kay<br/>Aesthetics</h1>
    </div>
  )
}

export default Hero