const Product =  {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string', // The name of the product, e.g., "Fresh Lime"
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // The image associated with the product
        options: {
          hotspot: true, // Enables cropping and focusing in the Sanity Studio
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number', // Price of the product, e.g., 38
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number', // Rating of the product, e.g., 1 to 5
        validation: (Rule:any) => Rule.min(1).max(5), // Ensure the rating is between 1 and 5
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number', // The quantity of the product, e.g., 10
      },
    ],
  };
  
  export default Product