export interface Restaurant {
  id: string;
  name: string;
  address: string;
  stars: number;
  reviews: number;
  burgers: Array<string>;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  tasteScore: number;
  textureScore: "Very juicy" | "Mushroom like" | "Beefy";
  visualScore: "Perfect" | "Good" | "Decent" | "Meh";
  restaurantName: string;
  restaurantId: string;
  restaurantAddress: string;
  comment?: string;
  image?: string;
}
