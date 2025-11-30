import { getRestaurant } from "../../models/restaurant";
import { RestaurantCover } from "./components/restaurant-cover";
import { RestaurantTitle } from "./components/restaurant-title";

export async function RestaurantHeader() {

  const restaurant = await getRestaurant('1')

  return (
    <div className="border-2 border-purple-400 rounded-lg p-6 mb-6 bg-white">
      <h2 className="text-center text-purple-600 font-bold mb-4">
        RestaurantHeader
      </h2>
      <div className="flex-column gap-4">
        <RestaurantCover />
        <RestaurantTitle restaurant={restaurant}/>
      </div>
    </div>
  );
}
