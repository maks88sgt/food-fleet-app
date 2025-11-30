import type { CustomerReview } from "../../../models/types";

type ReviewItemProps = {
  review: CustomerReview;
};

export function ReviewItem({ review }: ReviewItemProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    let stars = "⭐".repeat(fullStars);
    return stars;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-3">
      <p className="font-semibold text-gray-900 mb-2">{review.userName}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm">{renderStars(review.rating)}</span>
        <span className="text-sm text-gray-500">· {review.date}</span>
      </div>
      <p className="text-gray-700 text-sm">{review.comment}</p>
    </div>
  );
}
