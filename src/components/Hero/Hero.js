import './styles.css'
import LazyLoad from 'react-lazy-load'

const Hero = () => {
  return (
    <div className="hero">
      <LazyLoad>
        <img className="hero-image image" src='/images/hero.JPG' alt="Spa room" />
      </LazyLoad>
      <h1 className="hero-title">JOANNA KAY<br/>AESTHETICS</h1>
    </div>
  )
}

export default Hero