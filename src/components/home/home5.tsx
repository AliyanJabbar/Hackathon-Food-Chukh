// import Image from "next/image";
// import React from "react";
// import img from "../../../public/assets/client-img.png";
// import quote from "../../../public/assets/quotation.png";
// import dots from "../../../public/assets/dots-testimonial.png";
// import { Great_Vibes } from "next/font/google";

// const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });

// const Home5 = () => {
//   return (
//     <section className="py-[100px]">
//       {/* Top Headings */}
//       <div className="text-white px-[7%]">
//         <h2
//           className={`${greatVibes.className} text-[24px] md:text-[32px] text-orangeLike`}
//         >
//           Testimonials
//         </h2>
//         <h1 className="text-[36px] md:text-[48px] font-sans font-bold leading-tight">
//           What our client are saying
//         </h1>
//       </div>
//       {/* testimonial cover*/}
//       <div>
//         <div className="p-6 w-[65%] testimonialShadow mt-[120px] h-[450px] relative bg-white mx-auto">
//           <div className="container absolute -top-[100px] left-[150px] max-w-xl mx-auto">
//             <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
//               {/* images */}
//               <div className="gap-7 flex flex-col items-center justify-center">
//                 {/* client-img */}
//                 <Image
//                   src={img}
//                   alt="client-img"
//                   className="w-[133px] h-[134px] rounded-full dark:bg-gray-500"
//                 />
//                 {/* quotation mark */}
//                 <Image
//                   src={quote}
//                   alt="quote"
//                   className="w-[48px] h-[48px] rounded-full dark:bg-gray-500"
//                 />
//               </div>
//               {/* quote */}
//               <blockquote className="font-sans text-txtGray text-[18px] leading-[26px] w-[697px] text-center">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//                 diam pellentesque bibendum non dui volutpat fringilla bibendum.
//                 Urna, elit augue urna, vitae feugiat pretium donec id elementum.
//                 Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
//                 sit eu velit in consequat.
//               </blockquote>
//               {/* rating & text wrapper */}
//               <div className="space-y-[6px]">
//                 {/* rating */}
//                 <div className="rating rating-md space-x-[8px]">
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orangeLike"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orangeLike"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orangeLike"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-orangeLike"
//                   />
//                   <input
//                     type="radio"
//                     name="rating-7"
//                     className="mask mask-star-2 bg-outline"
//                     defaultChecked
//                   />
//                 </div>
//                 {/* text */}
//                 <div className="text-center dark:text-gray-600 space-y-2">
//                   <h1 className="text-[24px] font-bold font-sans text-txtBlack">
//                     Alamin Hasan
//                   </h1>
//                   <p className="text-txtlight text-[16px] font-[300]">
//                     Food Specialist
//                   </p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   type="button"
//                   aria-label="Page 1"
//                   className="w-2 h-2 rounded-full dark:bg-gray-900"
//                 ></button>
//                 <button
//                   type="button"
//                   aria-label="Page 2"
//                   className="w-2 h-2 rounded-full dark:bg-gray-400"
//                 ></button>
//                 <button
//                   type="button"
//                   aria-label="Page 3"
//                   className="w-2 h-2 rounded-full dark:bg-gray-400"
//                 ></button>
//                 <button
//                   type="button"
//                   aria-label="Page 4"
//                   className="w-2 h-2 rounded-full dark:bg-gray-400"
//                 ></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* dots */}
//       <div>
//         <Image src={dots} alt="dots" className="w-[86px] mx-auto mt-12" />
//       </div>
//     </section>
//   );
// };

// export default Home5;

import Image from "next/image";
import React from "react";
import img from "../../../public/assets/client-img.png";
import quote from "../../../public/assets/quotation.png";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home5 = () => {
  return (
    <section className="py-10 lg:py-[100px]">
      {/* Top Headings */}
      <div className="text-white px-6 md:px-[7%] sm:text-center md:text-left">
        <h2
          className={`${greatVibes.className} text-[20px] md:text-[24px] lg:text-[32px] text-orangeLike`}
        >
          Testimonials
        </h2>
        <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-sans font-bold leading-tight">
          What our clients are saying
        </h1>
      </div>
      {/* Testimonial Cover */}
      <div>
        <div className="p-6 lg:w-[65%] testimonialShadow mt-[100px] lg:mt-[120px] h-auto lg:h-[450px] relative bg-white mx-auto">
          <div className="absolute -top-[50px] lg:-top-[70px] left-1/2 transform -translate-x-1/2 w-full max-w-[150px] lg:max-w-[200px] flex flex-col items-center">
            {/* Client Image */}
            <Image
              src={img}
              alt="client-img"
              className="w-[133px] h-[134px] rounded-full"
            />
            {/* Quotation Mark */}
            <Image
              src={quote}
              alt="quote"
              className="w-[32px] lg:w-[48px] h-auto mt-7"
            />
          </div>
          {/* Quote Section */}
          <div className="mt-24 lg:mt-32 pb-2 pt-4 px-4 md:px-8 lg:px-10">
            <blockquote className="font-sans text-txtGray text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] text-center max-w-[90%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </blockquote>
            {/* Rating and Name Section */}
            <div className="mt-6 lg:mt-8 space-y-2 text-center">
              {/* Rating */}
              <div className="rating rating-md space-x-[8px]">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orangeLike"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orangeLike"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orangeLike"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orangeLike"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-outline"
                  defaultChecked
                />
              </div>
              {/* Name and Title */}
              <div className="space-y-2">
                <h1 className="text-[20px] md:text-[24px] font-bold font-sans text-txtBlack">
                  Alamin Hasan
                </h1>
                <p className="text-txtlight text-[14px] md:text-[16px] font-[300]">
                  Food Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-12">
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Page ${index + 1}`}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${
              index === 0 ? "bg-orangeLike" : "bg-orangeLike opacity-[30%]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Home5;
