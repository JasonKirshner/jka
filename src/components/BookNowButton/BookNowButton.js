import './styles.css'

const BookNowButton = ({ className, alt }) => (
  <a href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHWEqyT0Rd47RdMT3fpHGerCbUx7czWUhOS7T1wVvue4Y5h57QxCx7mc81cwU7+xsiEMEaX2f+IhV9hMknX/8KVUflmsbInhCblQ0+NRi59XFNSZgfQUeOqEuXpLZK5E3Asa0snf49Ao4mzdrYFT3Poykt8lRcmUW+K0jC6s8xDZOiMNuIW0LVjp35bmOD1LV8Hpr3TwS0lYgqFazyCguGNRWvM3fr9GcZOlxkXXGHQGrfMpofyYnEbuIy01lzJAGx952h5i1dDT/Drht68N8JVsvJi/7gZaDoz6KMX9zzdpRQmAS5gwd9+97YF6e9y7Y8cZHDCC6m1rxZdFZNLp4iw="
    target="_blank"
    rel="noreferrer external preload prerender"
    className={`booknow-btn ${className} ${alt && 'booknow-btn--alt'}`}>
    Book Now
  </a>
);

export default BookNowButton;