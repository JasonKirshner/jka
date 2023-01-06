import './styles.css'
import LazyLoad from 'react-lazy-load'

const Service = ({ image, title, description, cost }) => { 
  return (
    <div className="service">
      <div className="service-image-wrapper">
        <LazyLoad offset={-250}>
          <img className="service-image image" src={image} alt="Service" />
        </LazyLoad>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-cost p2">{cost}</p>
      <p className="service-description">{description}</p>
    </div>
  )
}

export default Service;