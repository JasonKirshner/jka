import './styles.css'
import LazyLoad from 'react-lazy-load'

const Environ = () => {
  return (
    <div class="environ container">
      <h2 class="environ-title">ENVIRON</h2>
      <div class="environ-container">
        <div class="environ-image-wrapper">
          <LazyLoad offset={-300}>
            <img class="environ-image image" src="../../images/environ.jpeg" alt="Environ products" />
          </LazyLoad>
        </div>
        <div class="environ-content">
          <h3 class="environ-subtitle">SCIENTIFICALLY DRIVEN RESULTS FOR IMPROVED SKIN.</h3>
          <p class="environ-description">
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
      </div>
    </div>
  )
}

export default Environ