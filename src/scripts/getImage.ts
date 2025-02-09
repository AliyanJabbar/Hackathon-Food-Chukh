import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const getImageUrl = (imageSource: string | SanityImageSource) => {
  // Check if the image source is an HTTPS URL
  if (typeof imageSource === "string" && imageSource.startsWith("https")) {
    return imageSource;
  }
  // Otherwise use Sanity's urlFor
  return urlFor(imageSource).url();
};

export default getImageUrl;
