import './styles.css'
import LazyLoad from 'react-lazy-load'

const Hero = () => {
  return (
    <div class="hero">
      <LazyLoad>
        <img class="hero-image image" src='/images/hero.JPG' alt="Spa room" />
      </LazyLoad>
      <h1 class="hero-title">JOANNA KAY<br/>AESTHETICS</h1>
    </div>
  )
}

export default Hero