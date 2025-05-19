import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ShopCarouselSpecial.module.css';

const ShopCarouselSpecial = () => {
  const items = [
    { id: 1, name: 'Item Name 1', points: '1000' },
    { id: 2, name: 'Item Name 2', points: '1200' },
    { id: 3, name: 'Item Name 3', points: '800' },
    { id: 4, name: 'Item Name 4', points: '1500' },
    { id: 5, name: 'Item Name 5', points: '950' },
    { id: 6, name: 'Item Name 6', points: '1100' },
  ];

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
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.pointsOnlyCarouselContainer}>
      <h2>Special Items</h2>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <div className={styles.itemImagePlaceholder}>
              </div>
              <h3 className={styles.itemName}>{item.name}</h3>
              <div className={styles.itemDetails}>
                <button className={styles.itemPointsButton}>{item.points} points</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopCarouselSpecial;