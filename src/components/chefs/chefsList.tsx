"use client";
import Image from "next/image";
import { ChefData } from "../../data/chefs";
import { urlFor } from "@/sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { useState, useEffect } from "react";

const ChefList = () => {
  const [chefs, setChefs] = useState<ChefData[]>([]);
  //fetching from sanity
  useEffect(() => {
    const query = `*[_type == "chef"]`;
    client
      .fetch(query)
      .then((data) => {
        console.log("Fetched data:", data);
        setChefs(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  return (
    <section className="px-6 sm:px-10 lg:px-[7%] py-12 sm:py-[100px]">
      {/* Chefs with images */}
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
  );
};

export default ChefList;
