import Button from "@/components/button";
import FindRestaurantsCard from "@/components/find-restaurants-card";
import ReviewCard from "@/components/review-card";
import ReviewForm from "@/components/review-form";
import TopReviewList from "@/components/top-review-list.";
import { Restaurant, Review } from "@/types";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const { data: session } = useSession();

  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const [reviews, setReviews] = useState<Array<Review>>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await fetch("/api/restaurants");
      const data = await res.json();
      setRestaurants(data ?? []);
    };
    fetchRestaurants();

    const fetchReviews = async () => {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      setReviews(data ?? []);
    };
    fetchReviews();
  }, []);

  return (
    <main>
      {/* <section className="py-6 sm:py-12 bg-gray-200 mb-6">
        <div className="mx-auto max-w-screen-xl px-6 text-gray-700 sm:text-center">
          <h1 className="text-5xl font-bold mb-3">Burger Club</h1>
          <p className="text-2xl sm:text-3xl mb-3">Home for burger fanatics</p>
          <p className="text-xl mb-3">
            Find burger restaurants and share your experience
          </p>
          <Button kind="primary" role="button" onClick={() => signIn()}>
            Sign in
          </Button>
        </div>
      </section> */}
      <section className="mx-auto max-w-screen-xl px-6 my-6">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="md:w-72">
            {session && session.user ? (
              <></>
            ) : (
              <div className="mb-6">
                <h2 className="text-2xl mb-3">Join the club</h2>
                <div className="border rounded-md p-3 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">
                    Become a member
                  </h3>
                  <p className="mb-3">
                    Try out new burger restaurants and give your review
                  </p>
                  <Button
                    className="w-full"
                    kind="primary"
                    role="button"
                    onClick={() => signIn()}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            )}
            <div className="sticky top-3">
              <h2 className="text-2xl mb-3">Find a restaurant</h2>
              <FindRestaurantsCard restaurants={restaurants} />
            </div>
          </div>
          <div className="grow">
            {session && session.user && (
              <>
                <h2 className="text-2xl mb-3">Share your experience</h2>
                <ReviewForm restaurants={restaurants} />
              </>
            )}
            <h2 className="text-2xl mb-3">Latest Reviews</h2>
            <div className="flex flex-col gap-3">
              {reviews.map((r) => {
                return <ReviewCard key={r.id} review={r} />;
              })}
            </div>
          </div>
          <div className="hidden lg:block md:w-72 md:border-l sm:pl-6">
            <div className="sticky top-3">
              <h2 className="text-2xl mb-3">Top reviewed</h2>
              <div className="flex flex-col gap-3">
                <TopReviewList restaurants={restaurants} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
