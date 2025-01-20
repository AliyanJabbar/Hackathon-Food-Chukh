import { Rule } from "@sanity/types";

export default {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "id",
      type: "number",
      title: "ID",
      description: "Unique identifier for the food item",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Food Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
      description: "Price after discount",
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
      validation: (Rule: Rule) => Rule.positive(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      description: "Average rating for the food item (out of 5)",
      validation: (Rule: Rule) => Rule.required().min(0).max(5),
    },
    {
      name: "TotalReviews",
      type: "number",
      title: "Total Reviews",
      description: "Number of reviews for the food item",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: "reviews",
      type: "array",
      title: "Reviews",
      description: "Customer reviews for the food item",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
      description: "Quantity added to the cart or purchased",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: "availiable",
      type: "boolean",
      title: "Availiable",
      description: "Availability status of the food item",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "inventory",
      type: "number",
      title: "Inventory",
      description: "Total stock available for the food item",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
