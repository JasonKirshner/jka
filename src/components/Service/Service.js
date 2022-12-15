import './styles.css'
import LazyLoad from 'react-lazy-load'

const Service = ({ image, title, description, cost }) => { 
  return (
    <div class="service">
      <div class="service-image-wrapper">
        <LazyLoad offset={-200}>
          <img class="service-image image" src={image} alt="Service" />
        </LazyLoad>
      </div>
      <h3 class="service-title">{title}</h3>
      <p class="service-cost p2">{cost}</p>
      <p class="service-description">{description}</p>
    </div>
  )
}

export default Service;