import './styles.css'

const Service = ({ image, title, description, cost }) => { 
  return (
    <div class="service">
      <div class="service-image-wrapper">
        <img class="service-image" src={image} alt="Service" />
      </div>
      <h3 class="service-title">{title}</h3>
      <p class="service-cost p2">{cost}</p>
      <p class="service-description">{description}</p>
    </div>
  )
}

export default Service;