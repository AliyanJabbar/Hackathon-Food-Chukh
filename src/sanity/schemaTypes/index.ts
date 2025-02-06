import { type SchemaTypeDefinition } from "sanity";
import chef from "./chefs";
import food from "./foods";
import orderDetailsToSanity from "./orderDetailsToSanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, orderDetailsToSanity],
};
