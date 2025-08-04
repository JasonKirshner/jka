import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'
import BookNowButton from '../BookNowButton/BookNowButton'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={"hero" + (isLoaded ? ' is-loaded' : '')}>
      <LazyLoadImage className="hero-image image" src='/images/hero.JPG' alt="Spa room" beforeLoad={() => setIsLoaded(true)} />
      <div className="hero-content">
        <h2 className="hero-subtitle h1">Bespoke Facials</h2>
        <BookNowButton alt className="hero-booknow" />
      </div>
      <h1 className="hero-title">Joanna Kay<br/>Aesthetics</h1>
    </div>
  )
}

export default Hero