import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

async function uploadImageToSanity(imageUrl) {
  const fullImageUrl = `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`;
  try {
    console.log(`Uploading image: ${fullImageUrl}`);
    const response = await fetch(fullImageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", fullImageUrl, error);
    return null;
  }
}

async function importData() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    console.log("Fetching food, chef data from API...");

    // Fetch food and chef data using fetch API
    const foodResponse = await fetch(`${url}/api/products`);
    const foods = await foodResponse.json();
    console.log("foods:", foods);

    const chefResponse = await fetch(`${url}/api/chefs`);
    const chefs = await chefResponse.json();
    console.log("chefs:", chefs);

    // Upload food data to Sanity
    for (const food of foods) {
      console.log(`Processing food: ${food.name}`);

      let imageRef = null;
      if (food.image) {
        imageRef = await uploadImageToSanity(food.image);
      }

      const sanityFood = {
        _type: "food",
        id: food.id,
        name: food.name,
        description: food.description,
        price: food.price,
        originalPrice: food.originalPrice,
        rating: food.rating,
        TotalReviews: food.TotalReviews,
        reviews: food.reviews,
        quantity: food.quantity,
        availiable: food.availiable,
        inventory: food.inventory,
        tags: food.tags,
        category: food.category,
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
      };

      console.log("Uploading food to Sanity:", sanityFood.name);
      const result = await client.create(sanityFood);
      console.log(`Food uploaded successfully: ${result._id}`);
    }

    // Upload chef data to Sanity
    for (const chef of chefs) {
      console.log(`Processing chef: ${chef.name}`);

      let imageRef = null;
      if (chef.image) {
        imageRef = await uploadImageToSanity(chef.image);
      }

      const sanityChef = {
        _type: "chef",
        id: chef.id || 0,
        name: chef.name || "",
        role: chef.role || "",
        experience: chef.experience || 0,
        speciality: chef.speciality || "",
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
      };
      console.log("Uploading chef to Sanity:", sanityChef.name);
      const result = await client.create(sanityChef);
      console.log(`Chef uploaded successfully: ${result._id}`);
    }

    console.log("Data import completed successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

importData();


// USE CASE: to import all data on sanity 

//1.Change Urls above using to fetch data 
//2.configure scripts in package.json:  "import-data": "node src/scripts/import-data.mjs"
//3.run the command: npm run import-data 