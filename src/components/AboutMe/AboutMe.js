import './styles.css'

const AboutMe = () => {
  return (
    <div class="container">
      <h2 class="aboutme-title">About Me</h2>
      <div class="aboutme-wrapper">
        <div class="aboutme-image-wrapper">
          <img class="aboutme-image" src="/images/self_portrait.jpeg" alt="Self Portrait for About Me section"/>
        </div>
        <div class="aboutme-text">
          <p>
            As a licensed esthetician with numerous years of experience in the beauty industry, my
            focus has always been on helping my clients achieve and maintain beautiful, healthy
            skin.
          </p>
          <p>
            Skin is the largest organ in the body and our front line of defense against the elements
            and everyday wear and tear. With this understanding it is paramount to keep your skin
            healthy to achieve beauty, overall health, and confidence.
          </p>
          <p>
            To enhance the beauty and confidence of my clients, I have selected the most
            innovative practices and superior products to be featured at our studio. A perfect
            combination of the latest scientific advances and cutting-edge technology to provide
            effective, advanced, and luxurious skin care for all.
          </p>
          <p>
            My passion for healthy skin is my inspiration to continue learning and staying up to date
            with the latest and most innovative treatments. As a Lead Esthetician I have earned a
            degree from the prestigious Bellus Academy School of Aesthetics in San Diego, CA.
            and have earned countless advance skin care accreditations with the top leading
            companies in the industry.
          </p>
          <p>
            With a focus on treating diverse skin conditions, I provide my clients with a unique
            hands-on experience that addresses the constant changes that your skin encounters
            over the years. Changes that, if left untreated, can take a toll on your confidence and
            overall health. I have developed customized facials for all skin types using modalities
            such as Micro-current, LED light therapy, Dermaplaning, Galvanic, Chemical Peels and
            Microdermabrasion.
          </p>
          <p>
            I thank you in advance for the opportunity to assist you on your journey toward a more
            beautiful, healthy you!
          </p>
          <p>
            Let us take the next step together in achieving the radiant, youthful skin you have
            always desired.
          </p>
          <p class="aboutme-attribute">- J. Kirshner Skin Care</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe