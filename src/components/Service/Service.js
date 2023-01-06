import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

const Service = ({ image, title, description, cost }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="service">
      <div className={"service-image-wrapper" + (isLoaded ? ' is-loaded' : '')}>
        <LazyLoadImage
          threshold={-150}
          src={image}
          beforeLoad={() => setIsLoaded(true)}
          alt="Service"
          className="service-image image"
        />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-cost p2">{cost}</p>
      <p className="service-description">{description}</p>
    </div>
  )
}

export default Service;