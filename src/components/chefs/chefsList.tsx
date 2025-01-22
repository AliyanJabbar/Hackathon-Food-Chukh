"use client";
import Image from "next/image";
import { ChefData } from "../../data/chefs";
import { urlFor } from "@/sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

const ChefList = () => {
  const [chefs, setChefs] = useState<ChefData[]>([]);
  //function for fetching data from sanity
  const fetchData = async () => {
    try {
      const query = `*[_type == "chef"]`;
      const data = await client.fetch(query);
      setChefs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //for internet connection handling
  useEffect(() => {
    // Initial fetch
    if (navigator.onLine) {
      fetchData();
    }

    // Handle online events
    const handleOnline = () => {
      fetchData();
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return chefs.length > 0 ? (
    <section className="px-6 sm:px-10 lg:px-[7%] py-12 sm:py-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">
        {/* Chef Card Template */}
        {chefs?.map((chef, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Chef Image */}
            <Image
              width={400}
              height={400}
              src={urlFor(chef.image).url()}
              alt={chef.name}
              className="relative w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Chef Details */}
            <div className="bg-white absolute bottom-0 left-0 w-full py-4 px-4 rounded-b-lg">
              <h1 className="text-txtBlack font-bold">{chef.name}</h1>
              <p className="text-txtBlack text-sm">{chef.role}</p>
            </div>
            <div className="absolute bottom-[-100%] z-10 left-0 w-full bg-black bg-opacity-80 text-white p-4 text-center backdrop-blur-sm animate-slideUp transition-all duration-300 group-hover:bottom-0">
              <p className="mt-2 text-sm">
                <strong className="text-orangeLike">Experience:</strong>{" "}
                {chef.experience} years
              </p>
              <p className="text-sm">
                <strong className="text-orangeLike">Speciality:</strong>{" "}
                {chef.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default ChefList;
