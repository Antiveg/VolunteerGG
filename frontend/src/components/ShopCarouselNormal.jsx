import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ShopCarouselNormal.module.css';

const NormalItemsCarousel = () => {
  const items = [
    { id: 1, name: 'Item Name 1', points: '1000', price: '50.000' },
    { id: 2, name: 'Item Name 2', points: '1200', price: '60.000' },
    { id: 3, name: 'Item Name 3', points: '800', price: '40.000' },
    { id: 4, name: 'Item Name 4', points: '1500', price: '75.000' },
    { id: 5, name: 'Item Name 5', points: '950', price: '47.500' },
    { id: 6, name: 'Item Name 6', points: '1100', price: '55.000' },
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
    <div className={styles.normalItemsCarouselContainer}>
      <h2>Normal Items</h2>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id} className={styles.carouselItemWrapper}>
            <div className={styles.carouselItem}>
              <div className={styles.itemImagePlaceholder}>
              </div>
              <h3 className={styles.itemName}>{item.name}</h3>
              <div className={styles.itemDetails}>
                <button className={styles.itemPointsButton}>{item.points} points</button>
                <button className={styles.itemPriceButton}>Rp. {item.price}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NormalItemsCarousel;