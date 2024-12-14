// import React from "react";
// import { Great_Vibes } from "next/font/google";
// import Image from "next/image";
// import img from "../../../public/assets/home4-img.png";
// import imgExp from "../../../public/assets/home4-img-exp.png";
// import fastFood from "../../../public/assets/icons/Hamburger.png";
// import lunch from "../../../public/assets/icons/Cookie.png";
// import dinner from "../../../public/assets/icons/Wine.png";

// const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });

// const Home4 = () => {
//   return (
//     <div className="mt-[100px] px-[7%]">
//       {/* main content */}
//       <div className="flex flex-row gap-[100px]">
//         {/* left content */}
//         <div>
//           <Image
//             src={img}
//             alt="foody image"
//             className=" lg:w-[860px]  xl:w-[860px] h-auto"
//           />
//         </div>
//         {/* Right Content */}
//         <div className="text-white text-center md:text-left flex flex-col  max-w-full">
//           <div>
//             <h2
//               className={`${greatVibes.className} text-[24px] md:text-[32px] text-orangeLike`}
//             >
//               Why Choose us
//             </h2>
//             <h1 className="text-[36px] md:text-[48px] font-sans font-bold leading-tight">
//               <span className="text-orangeLike">Ex</span>ta ordinary taste And
//               Experienced
//             </h1>
//           </div>
//           <p className="text-[14px] md:text-[16px] font-light max-w-[90%] md:max-w-[526px] my-[20px] mx-auto md:mx-0">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             diam pellentesque bibendum non dui volutpat fringilla bibendum.
//             Urna, elit augue urna, vitae feugiat pretium donec id elementum.
//             Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
//             eu velit in consequat.
//           </p>
//           <div className="flex items-center gap-10 mt-[10px]">
//             {/* Fast Food */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="p-5 bg-orangeLike rounded-md">
//                 <Image src={fastFood} alt="fastFood" />
//               </div>
//               <h2>Fast Food</h2>
//             </div>
//             {/* Lunch */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="p-5 bg-orangeLike rounded-md">
//                 <Image src={lunch} alt="fastFood" />
//               </div>
//               <h2>Lunch</h2>
//             </div>
//             {/* Dinner */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="p-5 bg-orangeLike rounded-md">
//                 <Image src={dinner} alt="fastFood" />
//               </div>
//               <h2>Dinner</h2>
//             </div>
//           </div>
//           <div className="mt-[30px]">
//             <Image src={imgExp} alt="imgExp"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home4;






import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import img from "../../../public/assets/home4-img.png";
import imgExp from "../../../public/assets/home4-img-exp.png";
import fastFood from "../../../public/assets/icons/Hamburger.png";
import lunch from "../../../public/assets/icons/Cookie.png";
import dinner from "../../../public/assets/icons/Wine.png";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Home4 = () => {
  return (
    <div className="mt-[100px] px-[5%] md:px-[7%]">
      {/* main content */}
      <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[100px] items-center">
        {/* left content */}
        <div className="w-full lg:w-auto">
          <Image
            src={img}
            alt="foody image"
            className="w-full lg:w-[860px] h-auto"
          />
        </div>
        {/* Right Content */}
        <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start max-w-full">
          <div>
            <h2
              className={`${greatVibes.className} text-[20px] md:text-[24px] lg:text-[32px] text-orangeLike`}
            >
              Why Choose us
            </h2>
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-sans font-bold leading-tight">
              <span className="text-orangeLike">Ex</span>ta ordinary taste And
              Experienced
            </h1>
          </div>
          <p className="text-[14px] md:text-[16px] font-light max-w-[90%] md:max-w-[526px] my-[20px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 md:gap-10 mt-[10px]">
            {/* Fast Food */}
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 md:p-5 bg-orangeLike rounded-md">
                <Image src={fastFood} alt="Fast Food" />
              </div>
              <h2 className="text-[14px] md:text-[16px] mt-2">Fast Food</h2>
            </div>
            {/* Lunch */}
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 md:p-5 bg-orangeLike rounded-md">
                <Image src={lunch} alt="Lunch" />
              </div>
              <h2 className="text-[14px] md:text-[16px] mt-2">Lunch</h2>
            </div>
            {/* Dinner */}
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 md:p-5 bg-orangeLike rounded-md">
                <Image src={dinner} alt="Dinner" />
              </div>
              <h2 className="text-[14px] md:text-[16px] mt-2">Dinner</h2>
            </div>
          </div>
          <div className="mt-[30px]">
            <Image src={imgExp} alt="imgExp" className="w-full lg:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;
