import Service from '../Service/Service'
import servicesArr from '../../api/services.json'
import './styles.css'

const Services = () => {
  return (
    <div className="services-container container">
      <h2 className="services-title">SERVICES</h2>
      <p className="services-discalimer">* Prices may vary by location</p>
      <div className="services">
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