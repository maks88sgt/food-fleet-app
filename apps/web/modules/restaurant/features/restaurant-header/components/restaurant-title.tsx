import { Restaurant } from "../../../models/types"

type RestaurantTitleProps = {
  restaurant: Restaurant
}

export function RestaurantTitle({restaurant}: RestaurantTitleProps) {

  const {name, rating, numRatings, description} = restaurant

  return (
    <div className="border-2 border-green-400 rounded-lg p-4 bg-white mb-4 max-w-lg">
      <p className="text-center text-green-600 font-semibold">RestaurantTitle</p>
      <p>{name}</p>
      <p>{rating} ⭐ based on {numRatings} reviews</p>
      <p>{description}</p>
    </div>
  )
}
