import Service from '../Service/Service'
import servicesArr from '../../api/services.json'
import './styles.css'

const Services = () => {
  return (
    <div class="services-container container">
      <h2 class="services-title">SERVICES</h2>
      <div class="services">
        {servicesArr.services.map((service, i) =>
          (
          <Service
              image={service.image} 
              title={service.title}
              description={service.description}
              cost={service.cost}
              key={i}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Services