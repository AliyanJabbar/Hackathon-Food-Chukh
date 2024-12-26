import { StaticImageData } from "next/image";
import { NextRequest, NextResponse } from "next/server";
// import food1 from "../../../../public/assets/shop/item1.png"
// import food2 from "../../../../public/assets/shop/item2.png"
// import food3 from "../../../../public/assets/shop/item3.png"
// import food4 from "../../../../public/assets/shop/item4.png"
// import food5 from "../../../../public/assets/shop/item5.png"
// import food6 from "../../../../public/assets/shop/item6.png"
// import food7 from "../../../../public/assets/shop/item7.png"
// import food8 from "../../../../public/assets/shop/item8.png"
// import food9 from "../../../../public/assets/shop/item9.png"


 // type of data
 type Data = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    quantity: number;
  };

  // for generating id
  let id = 0;
  function idGenerator() {
    return id++;
  }

  // storing data 
  const data: Data[] = [
    {
      id: idGenerator(),
      name: "Fresh Lime",
      image: "/assets/shop/item1.png",
      price: 38,
      rating: 1,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Chocolate Muffin",
      image: "/assets/shop/item2.png",
      price: 28,
      rating: 2,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Burger",
      image: "/assets/shop/item3.png",
      price: 21,
      rating: 3,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Country Burger",
      image: "/assets/shop/item4.png",
      price: 45,
      rating: 4,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Drink",
      image: "/assets/shop/item5.png",
      price: 23,
      rating: 5,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Pizza",
      image: "/assets/shop/item6.png",
      price: 43,
      rating: 2,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Cheese Butter",
      image: "/assets/shop/item7.png",
      price: 10,
      rating: 5,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Sandwiches",
      image: "/assets/shop/item8.png",
      price: 25,
      rating: 3,
      quantity: 0,
    },
    {
      id: idGenerator(),
      name: "Chicken Chup",
      image: "/assets/shop/item9.png",
      price: 12,
      rating: 4,
      quantity: 0,
    },
  ];
  
export function GET(req:NextRequest) {
    return NextResponse.json({data})
}
