import { Rule } from "@sanity/types";

export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "orderId",
      title: "Order ID",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "customerDetails",
      title: "Customer Details",
      type: "object",
      fields: [
        {
          name: "firstName",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "lastName",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "email",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "phone",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "address",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "zipCode",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "items",
      title: "Order Items",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "price", type: "number" },
            { name: "quantity", type: "number" },
            {
              name: "image",
              title: "Item Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: [
        { title: "Pending", value: "pending" },
        { title: "Processing", value: "processing" },
        { title: "Paid", value: "paid" },
        { title: "Shipped", value: "shipped" },
        { title: "Delivered", value: "delivered" },
        { title: "Cancelled", value: "cancelled" },
      ],

      validation: (Rule: Rule) => Rule.required(),
      initialValue: "pending",
    },
  ],
};
