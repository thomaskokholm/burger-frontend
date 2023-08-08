import { Restaurant } from "@/types";
import Link from "next/link";

export default function FindRestaurantsCard({
  restaurants,
}: {
  restaurants: Array<Restaurant>;
}) {
  return (
    <div className="border rounded-md p-3 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Restaurant near you</h3>
      <div className="flex flex-col gap-3">
        {restaurants &&
          restaurants.slice(0, 3).map((r) => {
            return (
              <div key={r.id}>
                <Link
                  className="font-semibold hover:underline"
                  href={`/restaurants/${r.id}`}
                  title={r.id}
                >
                  {r.name}
                </Link>
                <div className="text-sm">{r.address}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
