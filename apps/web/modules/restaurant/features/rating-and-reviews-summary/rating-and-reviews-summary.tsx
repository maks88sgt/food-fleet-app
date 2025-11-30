import { getRestaurantRatings } from "../../models/restaurant";

export async function RatingAndReviewsSummary() {
  const data = await getRestaurantRatings("1");

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-sm">
            {star <= Math.floor(rating) ||
            (star - rating < 1 && star - 1 < rating)
              ? "⭐"
              : "☆"}
          </span>
        ))}
      </div>
    );
  };

  const review = data.reviews[0]!;

  return (
    <div className="border-2 border-purple-400 rounded-lg p-6 bg-white mb-4">
      <p className="text-center text-purple-600 font-semibold">
        RatingAndReviewsSummary
      </p>
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-3 min-w-fit">
          <div className="text-5xl font-bold text-gray-900">
            {data.rating.toFixed(1)}
          </div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-xl">
                {star <= Math.floor(data.rating) ||
                (star - data.rating < 1 && star - 1 < data.rating)
                  ? "⭐"
                  : "☆"}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-600">
            {data.numRatings.toLocaleString()}+ Ratings
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                <div className="flex items-center gap-2">
                  {renderStars(review.rating)}
                  <span className="text-xs text-gray-600">
                    • {review.userName}
                  </span>
                  <span className="text-xs text-gray-600">• {review.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
