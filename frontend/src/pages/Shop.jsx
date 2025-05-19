import SearchBarShop from "../components/SearchBarShop";
import ShopCarouselNormal from "../components/ShopCarouselNormal";
import ShopCarouselSpecial from "../components/ShopCarouselSpecial";
import ShopCarouselPaid from "../components/ShopCarouselPaid";

export default function Shop() {
  return (
    <>
      <main>
        <SearchBarShop />
        <div className="shop-container">
            <div>
                <ShopCarouselSpecial />
                <ShopCarouselNormal />
                <ShopCarouselPaid />
            </div>
        </div>
      </main>
    </>
  );
}