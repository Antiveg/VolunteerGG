import Slider from 'react-slick';
import styles from './AffiliatesCarousel.module.css';
import porscheLogo from '../assets/porsche-logo.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const affiliates = [
  { id: 1, name: 'Porsche Placeholder 1', logo: porscheLogo, link: '#' },
  { id: 2, name: 'Porsche Placeholder 2', logo: porscheLogo, link: '#' },
  { id: 3, name: 'Porsche Placeholder 3', logo: porscheLogo, link: '#' },
  { id: 4, name: 'Porsche Placeholder 4', logo: porscheLogo, link: '#' },
  { id: 5, name: 'Porsche Placeholder 5', logo: porscheLogo, link: '#' },
  { id: 6, name: 'Porsche Placeholder 6', logo: porscheLogo, link: '#' },
];

export default function AffiliatesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.affiliatesSection}>
      <h2 className={styles.affiliatesTitle}>OUR AFFILIATE ORGANIZATIONS</h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {affiliates.map(affiliate => (
            <div key={affiliate.id} className={styles.slideItem}>
              <a href={affiliate.link} target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                <img src={affiliate.logo} alt={affiliate.name} className={styles.affiliateLogo} />
              </a>
              <p className={styles.logoPlaceholderText}>PLACEHOLDER</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}