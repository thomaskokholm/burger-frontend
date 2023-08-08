import { Review } from "@/types";
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border rounded-md p-3 bg-white shadow-sm">
      <div className="flex flex-row items-center gap-3 mb-3">
        <img
          src={review.userImage}
          alt={review.userName}
          width={32}
          className="rounded-full"
        />
        <div className="text-lg">
          <span className="font-semibold">{review.userName}</span> reviewed{" "}
          <Link
            className="font-semibold underline"
            href={`/restaurants/${review.restaurantId}`}
            title={review.restaurantId}
          >
            {review.restaurantName}
          </Link>
        </div>
      </div>
      {review.comment && (
        <p className="mb-3 italic">&ldquo;{review.comment}&rdquo;</p>
      )}
      {review.image && (
        <img
          src={review.image}
          alt={review.restaurantId}
          className="w-full mb-3 rounded"
        />
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <div>
          <h4 className="font-bold">Taste</h4>
          <div className="flex flex-row">
            {[...Array(review.tasteScore)].map((_e, i) => {
              return <StarIcon key={i} className="h-6 w-6 text-amber-500" />;
            })}
          </div>
        </div>
        <div>
          <h4 className="font-bold">Texture</h4>
          <div className="flex flex-row">{review.textureScore}</div>
        </div>
        <div>
          <h4 className="font-bold">Visual presentation</h4>
          <div className="flex flex-row">{review.visualScore}</div>
        </div>
      </div>
    </div>
  );
}
