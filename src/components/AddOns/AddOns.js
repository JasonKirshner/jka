import './styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

const addOnsData = [
  {
    title: 'Microneedling',
    price: '$75',
  },
  {
    title: 'LED Light Therapy',
    price: '$40',
  },
  {
    title: 'Chemical Peel',
    price: '$50',
  },
  {
    title: 'Dermaplaning',
    price: '$50',
  },
  {
    title: 'Micro Current',
    price: '$50',
  },
  {
    title: 'Galvanic Therapy',
    price: '$55',
  },
];

const AddOns = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="addons-section container">
      <h2 className="addons-title">ADD-ONS</h2>
      <div className='addons-wrapper'>
        <div className="addons-list">
          {addOnsData.map((addon, idx) => (
            <div className="addon-item" key={idx}>
              <h3 className="addon-name">{addon.title}</h3>
              <p className="addon-price">{addon.price}</p>
            </div>
          ))}
        </div>
        <div className={"addons-image-wrapper" + (isLoaded ? ' is-loaded' : '')}>
          <LazyLoadImage
            className="addons-image image"
            src="/images/addons.jpg" 
            alt="Add-ons Image" 
            beforeLoad={() => setIsLoaded(true)}
            threshold={-175}
          />
        </div>
      </div>
    </section>
  );
};

export default AddOns;