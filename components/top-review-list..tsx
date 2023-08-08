import { Restaurant } from "@/types";
import Link from "next/link";

export default function TopReviewList({
  restaurants,
}: {
  restaurants: Array<Restaurant>;
}) {
  return (
    <>
      {restaurants &&
        restaurants.map((r, i) => {
          return (
            <div key={r.id} className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full border bg-white flex justify-center items-center">
                {i + 1}
              </div>
              <Link
                className="hover:underline"
                href={`/restaurants/${r.id}`}
                title={r.id}
              >
                <strong>{r.name}</strong>
                <br />({r.reviews} reviews)
              </Link>
            </div>
          );
        })}
    </>
  );
}
