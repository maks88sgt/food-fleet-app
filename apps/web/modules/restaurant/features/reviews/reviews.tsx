import { getRestaurantRatings } from "../../models/restaurant";
import { ReviewItem } from "./component/review-item";

export async function Reviews() {
  const { reviews } = await getRestaurantRatings("1");
  return (
    <div className="border-2 border-purple-400 rounded-lg p-6 bg-white mb-4">
      <p className="text-center text-purple-600 font-semibold">Reviews</p>
      <div className="grid grid-cols-2 gap-2 max-w-full">
        {reviews.map((review) => {
          return <ReviewItem review={review} key={review.id} />;
        })}
      </div>
    </div>
  );
}
