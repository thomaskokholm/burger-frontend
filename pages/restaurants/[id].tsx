import { Restaurant } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ResturantDetailsPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    const fetchRestaurantById = async (id: string) => {
      const res = await fetch(`/api/restaurants/${id}`);
      const data = await res.json();
      setRestaurant(data);
    };
    if (id) {
      fetchRestaurantById(id);
    }
  });

  return (
    <main>
      {restaurant && (
        <article className="prose md:prose-lg max-w-none my-6 text-center">
          <h1 className="text-center">{restaurant.name}</h1>
          <div className="flex flex-row justify-center">
            {[...Array(restaurant.stars)].map((_e, i) => {
              return <StarIcon key={i} className="h-8 w-8 text-amber-500" />;
            })}
          </div>
          <div className="text-center my-5">
            <address>
              <Link
                href={`https://www.google.com/maps/place/${encodeURI(
                  restaurant.address
                )}`}
                title={restaurant.address}
                target="_blank"
              >
                {restaurant.address}
              </Link>
            </address>
          </div>
          <h2>Opening Hours</h2>
          Every day from <time>12:00 &mdash; 20:30</time>
          <h2>Burger Menu</h2>
          <div className="flex flex-col">
            {restaurant.burgers.map((b, i) => {
              return <div key={i}>{b}</div>;
            })}
          </div>
        </article>
      )}
    </main>
  );
}
