import { Data } from "@/data/foods";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export function useFetchFoods() {
  const [products, setProducts] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `*[_type == "food"]`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    }

    if (navigator.onLine) {
      fetchData();
    }

    const handleOnline = () => {
      fetchData();
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, []);

  return products 
}
