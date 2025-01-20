// type of data
export interface Data {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  TotalReviews: number;
  reviews: string[];
  quantity: number;
  availiable: boolean;
  inventory: number;
  tags: string[];
  category: string;
}

// for generating id
let id = 0;
function idGenerator() {
  return id++;
}

const food: Data[] = [
  {
    id: idGenerator(),
    name: "Fresh Lime",
    image: "/assets/shop/item1.png",
    description: "Refreshing lime drink made with real fruit.",
    price: 38,
    originalPrice: 45,
    rating: 1,
    TotalReviews: 10,
    reviews: ["Tasty and refreshing!", "Great for summer."],
    quantity: 0,
    availiable: true,
    inventory: 50,
    tags: ["Drink", "Refreshing", "Popular"],
    category: "Drink",
  },
  {
    id: idGenerator(),
    name: "Chocolate Muffin",
    image: "/assets/shop/item2.png",
    description: "Delicious chocolate muffin with a soft center.",
    price: 28,
    originalPrice: 35,
    rating: 2,
    TotalReviews: 20,
    reviews: ["Too sweet for me.", "Soft and chocolaty."],
    quantity: 0,
    availiable: true,
    inventory: 30,
    tags: ["Dessert", "Chocolate", "Snack"],
    category: "Dessert",
  },
  {
    id: idGenerator(),
    name: "Burger",
    image: "/assets/shop/item3.png",
    description: "Classic beef burger with lettuce and tomato.",
    price: 21,
    originalPrice: 25,
    rating: 3,
    TotalReviews: 50,
    reviews: ["Good, but could use more flavor.", "Affordable and tasty."],
    quantity: 0,
    availiable: true,
    inventory: 40,
    tags: ["Burger", "Beef", "Meal"],
    category: "Burger",
  },
  {
    id: idGenerator(),
    name: "Country Burger",
    image: "/assets/shop/item4.png",
    description: "A hearty country-style burger with special sauce.",
    price: 45,
    originalPrice: 50,
    rating: 4,
    TotalReviews: 80,
    reviews: ["Loved it!", "Perfectly grilled."],
    quantity: 0,
    availiable: true,
    inventory: 25,
    tags: ["Burger", "Country Style", "Special"],
    category: "Burger",
  },
  {
    id: idGenerator(),
    name: "Drink",
    image: "/assets/shop/item5.png",
    description: "A refreshing carbonated drink for any occasion.",
    price: 23,
    originalPrice: 28,
    rating: 5,
    TotalReviews: 100,
    reviews: ["Best drink ever!", "My favorite!"],
    quantity: 0,
    availiable: true,
    inventory: 60,
    tags: ["Drink", "Popular", "Carbonated"],
    category: "Drink",
  },
  {
    id: idGenerator(),
    name: "Pizza",
    image: "/assets/shop/item6.png",
    description: "Cheese-loaded pizza with a crispy crust.",
    price: 43,
    originalPrice: 50,
    rating: 2,
    TotalReviews: 15,
    reviews: ["Could use more cheese.", "Nice crust."],
    quantity: 0,
    availiable: true,
    inventory: 20,
    tags: ["Pizza", "Cheese", "Snack"],
    category: "Pizza",
  },
  {
    id: idGenerator(),
    name: "Cheese Butter",
    image: "/assets/shop/item7.png",
    description: "Creamy cheese butter for spreading on bread.",
    price: 10,
    originalPrice: 15,
    rating: 5,
    TotalReviews: 5,
    reviews: ["Great flavor!", "Very creamy."],
    quantity: 0,
    availiable: true,
    inventory: 100,
    tags: ["Cheese", "Butter", "Spread"],
    category: "Spread",
  },
  {
    id: idGenerator(),
    name: "Sandwiches",
    image: "/assets/shop/item8.png",
    description: "Delicious sandwiches with a variety of fillings.",
    price: 25,
    originalPrice: 30,
    rating: 3,
    TotalReviews: 30,
    reviews: ["Tasty and filling.", "Good for lunch."],
    quantity: 0,
    availiable: true,
    inventory: 35,
    tags: ["Sandwich", "Meal", "Snack"],
    category: "Sandwich",
  },
  {
    id: idGenerator(),
    name: "Chicken Chup",
    image: "/assets/shop/item9.png",
    description: "Crispy fried chicken with a spicy dip.",
    price: 12,
    originalPrice: 18,
    rating: 4,
    TotalReviews: 25,
    reviews: ["Crispy and delicious!", "Loved the dip."],
    quantity: 0,
    availiable: true,
    inventory: 45,
    tags: ["Chicken", "Snack", "Crispy"],
    category: "Chicken",
  },
];

export default food;
