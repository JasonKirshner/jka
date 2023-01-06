import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={"hero" + (isLoaded ? ' is-loaded' : '')}>
      <LazyLoadImage className="hero-image image" src='/images/hero.JPG' alt="Spa room" beforeLoad={() => setIsLoaded(true)} />
      <h1 className="hero-title">JOANNA KAY<br/>AESTHETICS</h1>
    </div>
  )
}

export default Hero