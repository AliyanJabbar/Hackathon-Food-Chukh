// "use client";
import Home1 from "@/components/home/home1";
import Home2 from "@/components/home/home2";
import Home3 from "@/components/home/home3";
import Home4 from "@/components/home/home4";
import Home5 from "@/components/home/home5";
import Home6 from "@/components/home/home6";
import Home7 from "@/components/home/home7";
import Home8 from "@/components/home/home8";
// import { useEffect, useState } from "react";
// import { client } from "../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
export default function Home() {
  
  //defining type of data
  // type Data = {
  //   id: number;
  //   name: string;
  //   image: string;
  //   price: number;
  //   rating: number;
  //   quantity: number;
  // };

  //1. essential states for data fetching and inserting into sanity
  // const [Products, setProducts] = useState<Data[] | null>(null);
  // const [dataInserted, setDataInserted] = useState(false); // to ensure data is only inserted once
  //2.fetching products data from api
  // useEffect(() => {
  //   // Function to fetch product data
  //   async function fetchingProducts() {
  //     try {
  //       const baseUrl =
  //         process.env.NEXT_PUBLIC_API_URL || process.env.VERCEL_URL;
  //       const fetchedProducts = await fetch(`${baseUrl}/api/products`);

  //       if (!fetchedProducts.ok) {
  //         console.error("Fetch failed with status:", fetchedProducts.status);
  //         throw new Error(`HTTP error! Status: ${fetchedProducts.status}`);
  //       }

  //       const response = await fetchedProducts.json();
  //       // Log response to debug
  //       console.log("Fetched Products:", response.data);
  //       setProducts(response.data); // Set fetched products to state
  //     } catch (error) {
  //       console.error("Error during fetch:", error);
  //     }
  //   }

  //   fetchingProducts();
  // }, []);

  //3.function for inserting data into sanity
  // async function insertData() {
  //   if (Products !== null && !dataInserted) {
  //     try {
  //       // Creating base documents to insert in sanity
  //       const createdDocs = await Promise.all(
  //         Products.map((product) =>
  //           client.create({
  //             _type: "product",
  //             name: product.name,
  //             price: product.price,
  //             rating: product.rating,
  //             quantity: product.quantity,
  //           })
  //         )
  //       );

  //       // Updating documents with images
  //       const updatedDocs = await Promise.all(
  //         createdDocs.map(async (doc, index) => {
  //           // Firstly fetching the image
  //           const response = await fetch(Products[index].image);
  //           const blob = await response.blob();
  //           const imageBuffer = await blob.arrayBuffer();

  //           // Uploading image as buffer
  //           const imageAsset = await client.assets.upload(
  //             "image",
  //             Buffer.from(imageBuffer)
  //           );

  //           return client
  //             .patch(doc._id)
  //             .set({
  //               image: {
  //                 _type: "image",
  //                 asset: {
  //                   _type: "reference",
  //                   _ref: imageAsset._id,
  //                 },
  //               },
  //             })
  //             .commit();
  //         })
  //       );

  //       setDataInserted(true);
  //       console.log("Data with images successfully inserted:", updatedDocs);
  //     } catch (err: any) {
  //       console.error("Error inserting data:", err.message);
  //     }
  //   }
  // }

  //4.now inserting data in sanity using the above function
  // useEffect(() => {
  //   if (Products !== null && !dataInserted) {
  //     insertData();
  //   }
  // }, [Products, dataInserted]); // Trigger when Products state changes



  //5.fetching from sanity by groq query
  // const query = `*[_type == "product"]{
  //   _id,
  //   name,
  //   price,
  //   rating,
  //   quantity,
  //   "imageUrl": image.asset->url
  // }`;

  // client
  //   .fetch(query)
  //   .then((data) => {
  //     console.log("Fetched data:", data);
  //   })
  //   .catch((err) => {
  //     console.error("Error fetching data:", err);
  //   });

  return (
    <div className="bg-blackish">
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
    </div>
  );
}
