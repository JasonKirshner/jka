import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

const Environ = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="environ container">
      <h2 className="environ-title">ENVIRON</h2>
      <div className="environ-container">
        <div className="environ-content">
          <h3 className="environ-subtitle">SCIENTIFICALLY DRIVEN RESULTS FOR IMPROVED SKIN.</h3>
          <p className="environ-description">
            Environ creates scientifically researched and developed skin care products that make a
            lasting difference in the appearance of the skin. Environ believes beautiful, healthy-looking
            skin should be the norm and not the exception. Their products are ideal for everyone –
            regardless of age, gender or race. With innovative science, skin can be restored, revived,
            and rehabilitated, resulting in optimal health and well-being.
            Founded by Dr. Des Fernandes, the formula behind the products is based on the need to
            assist with replenishing all of the essential skin nutrients lost by exposure to various
            environmental factors.
            <br/>
            <br/>
            Environ’s products restore skin damaged by pollution, harmful
            radiation from the sun, stress, and poor diet. The only way to replenish the skin is through
            topical products, supplements, and skin treatments. Environ combines powerful ingredients
            such as Vitamins A, C, &amp; E, Antioxidants, Peptides, Sunscreens, Alpha &amp; Beta Hydroxy
            Acids, Hyaluronic Acid, Growth Factors, Pro-vitamin B5, and Vitamin B3.
            The products are only manufactured from the highest quality ingredients and fresh, active
            vitamins. To ensure Environ products can be used by everyone, even those with allergies,
            most of the Environ line is manufactured without using preservatives or perfumes. Most
            skincare lines on the market today do not follow these standards and manufacture their
            products with preservatives and perfumes, making Environ especially unique.
          </p>
        </div>
        <div className={"environ-image-wrapper" + (isLoaded ? ' is-loaded' : '')}>
          <LazyLoadImage
            className="environ-image image"
            src="../../images/environ.jpeg"
            alt="Environ products"
            beforeLoad={() => setIsLoaded(true)}
            threshold={-200}
          />
        </div>
      </div>
    </div>
  )
}

export default Environ