import { useState, useRef, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './styles.css'

const Navigation = () => {
  const [isAnimClassAdded, setIsAnimClassAdded] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const navBarHeight = useRef(null)

  useEffect(() => {
    const navBar = document.querySelector('header')
    navBarHeight.current = navBar.offsetHeight
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToAboutMe = () => {
    const aboutMe = document.querySelector('.about-me')

    window.scrollTo({
      top: aboutMe.offsetTop - (navBarHeight.current + 10),
      behavior: 'smooth'
    })
  }

  const scrollToServices = () => {
    const services = document.querySelector('.services-container')

    window.scrollTo({
      top: services.offsetTop - (navBarHeight.current + 10),
      behavior: 'smooth'
    })
  }

  const scrollToEnviron = () => {
    const environ = document.querySelector('.environ')

    window.scrollTo({
      top: environ.offsetTop - (navBarHeight.current + 10),
      behavior: 'smooth'
    })
  }

  const addAnimClass = () => {
    setIsAnimClassAdded(true)
    document.querySelector('.title-logo').classList.add('animated')
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div class="header-container">
        <button onClick={scrollToTop} className="title" onMouseOver={!isAnimClassAdded && addAnimClass}>
          <svg class="title-logo" preserveAspectRatio="none" viewBox="19.999 45.376 160.001 109.248" xmlns="http://www.w3.org/2000/svg">
            <path d="M120.23 154.624c-6.238 0-12.903-.92-19.976-2.761a2.286 2.286 0 0 1-1.709-2.033c-1.549-19.328 2.791-34.715 12.903-45.73 12.783-13.927 35.069-21.078 66.247-21.254.665.166 1.334.296 1.768.818.439.522.622 1.212.499 1.883-5.591 30.676-16.503 51.385-32.436 61.552-7.852 5.011-16.988 7.525-27.296 7.525zm-17.236-6.797c16.793 4.065 30.936 2.514 42.066-4.589 14.356-9.157 24.399-27.914 29.879-55.776-28.387.558-48.602 7.193-60.116 19.735-8.931 9.733-12.907 23.398-11.829 40.63z" data-color="1" class="icon1"/>
            <path d="M79.769 154.624c-10.31 0-19.443-2.51-27.297-7.525-15.934-10.167-26.847-30.876-32.436-61.552a2.29 2.29 0 0 1 2.255-2.701h.013c31.178.177 53.468 7.329 66.249 21.254 10.107 11.015 14.449 26.402 12.898 45.73a2.286 2.286 0 0 1-1.709 2.033c-7.071 1.84-13.737 2.761-19.973 2.761zM25.063 87.462c5.48 27.861 15.523 46.619 29.875 55.776 11.136 7.108 25.279 8.65 42.063 4.589 1.084-17.232-2.891-30.897-11.822-40.63C73.667 94.655 53.45 88.02 25.063 87.462zm74.105 62.185h.043-.043z" data-color="1" class="icon1"/>
            <path d="M101.456 150.277c-.464 0-.929-.145-1.329-.426-15.8-11.237-24.795-24.45-26.736-39.275-2.452-18.742 6.398-40.412 26.302-64.411.869-1.052 2.659-1.052 3.528 0 19.904 23.999 28.754 45.668 26.3 64.411-1.939 14.824-10.934 28.038-26.734 39.275a2.325 2.325 0 0 1-1.331.426zm0-99.032c-17.82 22.107-25.731 41.857-23.523 58.739 1.715 13.099 9.626 24.923 23.523 35.171 13.895-10.248 21.808-22.073 23.521-35.171 2.212-16.882-5.701-36.632-23.521-58.739z" data-color="1" class="icon1"/>
          </svg>
          <p class="header-title-text p-cursive">JOANNA KAY AESTHETICS</p>
        </button>
        <nav className={'nav-menu ' + (isMenuOpen ? 'nav-menu-open' : '')}>
          <ul class="nav-items">
            <li class="nav-item">
              <button onClick={scrollToServices} className='nav-item-link h3'>Services</button>
            </li>
            <li class="nav-item">
              <button onClick={scrollToAboutMe} className='nav-item-link h3'>About</button>
            </li>
            <li class="nav-item">
              <button onClick={scrollToEnviron} className='nav-item-link h3'>Environ</button>
            </li>
          </ul>
          <a href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHWEqyT0Rd47RdMT3fpHGerCbUx7czWUhOS7T1wVvue4Y5h57QxCx7mc81cwU7+xsiEMEaX2f+IhV9hMknX/8KVUflmsbInhCblQ0+NRi59XFNSZgfQUeOqEuXpLZK5E3Asa0snf49Ao4mzdrYFT3Poykt8lRcmUW+K0jC6s8xDZOiMNuIW0LVjp35bmOD1LV8Hpr3TwS0lYgqFazyCguGNRWvM3fr9GcZOlxkXXGHQGrfMpofyYnEbuIy01lzJAGx952h5i1dDT/Drht68N8JVsvJi/7gZaDoz6KMX9zzdpRQmAS5gwd9+97YF6e9y7Y8cZHDCC6m1rxZdFZNLp4iw="
            target="_blank"
            rel="noreferrer external preload prerender"
            className="booknow-btn booknow-btn-desktop">Book Now</a>
        </nav>
        <div className="nav-menu-mobile-wrapper">
          <a href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHWEqyT0Rd47RdMT3fpHGerCbUx7czWUhOS7T1wVvue4Y5h57QxCx7mc81cwU7+xsiEMEaX2f+IhV9hMknX/8KVUflmsbInhCblQ0+NRi59XFNSZgfQUeOqEuXpLZK5E3Asa0snf49Ao4mzdrYFT3Poykt8lRcmUW+K0jC6s8xDZOiMNuIW0LVjp35bmOD1LV8Hpr3TwS0lYgqFazyCguGNRWvM3fr9GcZOlxkXXGHQGrfMpofyYnEbuIy01lzJAGx952h5i1dDT/Drht68N8JVsvJi/7gZaDoz6KMX9zzdpRQmAS5gwd9+97YF6e9y7Y8cZHDCC6m1rxZdFZNLp4iw="
            target="_blank"
            rel="noreferrer external preload prerender"
            className="booknow-btn booknow-btn-mobile">Book Now</a>
          <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction="right" color="#9c8c58" label="Show Menu" />
        </div>
      </div>
    </header>
  )
}

export default Navigation