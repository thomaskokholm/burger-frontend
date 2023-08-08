import { User } from "next-auth";
import { Restaurant, Review } from "./types";

export const allUsers: Array<User> = [
  {
    image: "/profile-picture-1.jpg",
    id: "johndoe",
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
  {
    image: "/profile-picture-2.jpg",
    id: "annekhansen",
    name: "Anne Kristine Hansen",
    email: "AnneKHansen@outlook.com",
  },
  {
    image: "/profile-picture-3.jpg",
    id: "emiliejensen",
    name: "Emilie Jensen",
    email: "EmilieJensen@gmx.com",
  },
];

export const allRestaurants: Array<Restaurant> = [
  {
    id: "alberts-burgers",
    name: "Alberts Burgers",
    address: "Vestergade 5A, 7100 Vejle",
    stars: 3,
    reviews: 231,
    burgers: ["Double Bacon Cheese", "Classic", "Double Meat"],
  },
  {
    id: "garage-burger-bar",
    name: "Garage Burgerbar",
    address: "Rådhusplassagen 9A, 7100 Vejle",
    stars: 4,
    reviews: 154,
    burgers: ["Mercedes Smoke", "Bentley Cjeese", "Hummer Ham"],
  },
  {
    id: "billund-gastropub",
    name: "Billund Gastropub",
    address: "Butikstorvet 10H, 7190 Billund",
    stars: 5,
    reviews: 127,
    burgers: [
      "Gastroburger",
      "Trøffelburger",
      "Vegetarburger",
      "Dobbel Gastroburger",
    ],
  },
  {
    id: "grillen-burgerbar",
    name: "Grillen Burgerbar",
    address: "Søndergade 24, 7100 Vejle",
    stars: 4,
    reviews: 98,
    burgers: ["Bacon and Cheese", "Pablo", "Fried Chicked"],
  },
  {
    id: "burger-grill",
    name: "Burger Grill",
    address: "Gammelbro 32a, 7190 Billund",
    stars: 4,
    reviews: 95,
    burgers: ["Hamburger", "Bacon Cheeseburger", "Mexican Burger"],
  },
  {
    id: "burger-joint",
    name: "Burger Joint",
    address: "Vestergade 33C, 7100 Vejle",
    stars: 3,
    reviews: 87,
    burgers: ["Hamburger", "Chili Cheeseburger", "Mexicano Cheeseburger"],
  },
];

export const allReviews: Array<Review> = [
  {
    id: "r1",
    userName: allUsers[0].name,
    userImage: allUsers[0].image,
    restaurantName: allRestaurants[0].name,
    restaurantId: allRestaurants[0].id,
    restaurantAddress: allRestaurants[0].address,
    tasteScore: 3,
    textureScore: "Beefy",
    visualScore: "Good",
    image: "/burger-1.jpg",
    comment: "Good burger. Very meat packed.",
  },
  {
    id: "r2",
    userName: allUsers[1].name,
    userImage: allUsers[1].image,
    restaurantName: allRestaurants[1].name,
    restaurantId: allRestaurants[1].id,
    restaurantAddress: allRestaurants[1].address,
    tasteScore: 4,
    textureScore: "Mushroom like",
    visualScore: "Good",
    image: "/burger-2.jpg",
    comment:
      "Very tasty burger. With a lot of burger dressing. Can highly recommend!",
  },
  {
    id: "r3",
    userName: allUsers[2].name,
    userImage: allUsers[2].image,
    restaurantName: allRestaurants[2].name,
    restaurantId: allRestaurants[2].id,
    restaurantAddress: allRestaurants[2].address,
    tasteScore: 5,
    textureScore: "Very juicy",
    visualScore: "Decent",
    comment:
      "Very juicy burger with a lot of taste and a delicious soft burger bun",
  },
  {
    id: "r4",
    userName: allUsers[1].name,
    userImage: allUsers[1].image,
    restaurantName: allRestaurants[0].name,
    restaurantId: allRestaurants[0].id,
    restaurantAddress: allRestaurants[0].address,
    tasteScore: 4,
    textureScore: "Beefy",
    visualScore: "Perfect",
    image: "/burger-1.jpg",
    comment: "Tasty and beefy burger!",
  },
];
