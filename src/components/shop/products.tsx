import { atom } from "jotai";
import { Data } from "../../data/foods";

export const productsAtom = atom<Data[]>([]);
export const selectedCategoriesAtom = atom<string[]>([]);
export const selectedTagsAtom = atom<string[]>([]);
export const priceRangeAtom = atom<[number, number]>([0, 1000]);
export const searchQueryAtom = atom("");

export const highlightSearchResults = (
  products: Data[],
  searchQuery: string
) => {
  if (!searchQuery.trim()) return products;

  return products.map((product) => {
    const productName = [...product.name];
    const highlightedName = productName.map((letter) => {
      if (searchQuery.toLowerCase().includes(letter.toLowerCase())) {
        return (
          <span key={Math.random()} className="text-orangeLike font-semibold">
            {letter}
          </span>
        );
      }
      return letter;
    });

    return {
      ...product,
      displayName: <span>{highlightedName}</span>,
    };
  });
};

export const filteredProductsAtom = atom((get) => {
  const products = get(productsAtom);
  const categories = get(selectedCategoriesAtom);
  const tags = get(selectedTagsAtom);
  const priceRange = get(priceRangeAtom);
  const searchQuery = get(searchQueryAtom);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categories.length === 0 || categories.includes(product.category);
    const matchesTags =
      tags.length === 0 || product.tags.some((tag) => tags.includes(tag));
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch && matchesTags;
  });

  return highlightSearchResults(filteredProducts, searchQuery);
});
