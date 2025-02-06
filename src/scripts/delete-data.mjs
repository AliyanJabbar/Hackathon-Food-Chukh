import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

const deleteAllByType = async () => {
  try {
    const query = `*[_type == "order"]._id`; // Change type according to the useCase
    const ids = await client.fetch(query);

    if (ids.length === 0) {
      console.log(`No documents found`);
      return;
    }

    console.log(`Found ${ids.length} documents. Deleting...`);

    const transaction = client.transaction();
    ids.forEach((id) => {
      transaction.delete(id);
    });

    const result = await transaction.commit();
    console.log(`Successfully deleted ${result.results.length} documents.`);
  } catch (error) {
    console.error("Error deleting documents:", error.message);
  }
};

deleteAllByType();

// USE CASE:

// to use this delete function:
// 1.change the type of the schema above to match the type
// 2.configure the scripts in package.json  "delete-data": "node src/scripts/delete-data.mjs",
// 3.run " npm run delete-data "
