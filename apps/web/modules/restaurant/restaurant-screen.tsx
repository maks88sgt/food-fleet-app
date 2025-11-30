import { RestaurantHeader } from "./features/restaurant-header/restaurant-header";
import { DeliveryPrompt } from "./features/delivery-prompt/delivery-prompt";
import { FAQ } from "./features/faq/faq";
import { FeaturedCarousel } from "./features/featured-carousel/featured-carousel";
import { MenuItemsList } from "./features/menu-items-list/menu-items-list";
import { RatingAndReviewsSummary } from "./features/rating-and-reviews-summary/rating-and-reviews-summary";
import { RestaurantDelivery } from "./features/restaurant-delivery/restaurant-delivery";
import { Reviews } from "./features/reviews/reviews";
import { LegalDisclaimer } from "./features/legal-disclaimer/legal-disclaimer";
import { SearchBar } from "./features/search-bar/search-bar";

export function RestaurantScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        <RestaurantHeader />
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2 row-span-1">
            <DeliveryPrompt />
          </div>
          <div className="col-span-1 col-start-3 row-span-3">
            <RestaurantDelivery/>
          </div>
          <div className="col-span-2 row-span-2">
            <RatingAndReviewsSummary />
          </div>
          
        </div>
          <FeaturedCarousel />
          <SearchBar/>
          <MenuItemsList />
          <Reviews />
          <FAQ />
          <LegalDisclaimer />
      </main>
    </div>
  );
}
