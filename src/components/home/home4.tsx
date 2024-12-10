// import Image from "next/image";
// import React from "react";
// import img1 from "../../../public/assets/home4-img.png";
// import img2 from "../../../public/assets/home4-img2.png";
// import img3 from "../../../public/assets/home4-img3.png";
// import img4 from "../../../public/assets/home4-img4.png";

// const Home4 = () => {
//   return (
//     <div className=" bg-blackish pt-[100px]">
//       <div className="relative p-[25px]">
//         {/* bg with image */}
//         <div className="absolute inset-0 bg-home4-bg bg-[length:screen_468px] bg-center bg-no-repeat" />
//         {/* Blackish overlay */}
//         <div className="absolute inset-0 bg-blackish opacity-90" />

//         {/* Content container */}
//         <div className="relative z-10 h-full py-[100px] px-[7%]">
//           <div className="flex flex-row">
//             <Image className=" mx-10" src={img1} alt="client 1" />
//             <Image className=" mx-10" src={img2} alt="client 2" />
//             <Image className=" mx-10" src={img3} alt="client 3" />
//             <Image className=" mx-10" src={img4} alt="client 4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home4;





















import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/home4-img.png";
import img2 from "../../../public/assets/home4-img2.png";
import img3 from "../../../public/assets/home4-img3.png";
import img4 from "../../../public/assets/home4-img4.png";

const Home4 = () => {
  return (
    <div className="bg-blackish pt-10 lg:pt-[100px]">
      <div className="relative p-6 lg:p-[25px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-home4-bg bg-[length:100%_468px] lg:bg-[length:screen_468px] bg-center bg-no-repeat" />
        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-blackish opacity-90" />

        {/* Content Container */}
        <div className="relative z-10 h-full py-10 lg:py-[100px] px-4 lg:px-[7%]">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-[35px]">
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img1}
              alt="client 1"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img2}
              alt="client 2"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img3}
              alt="client 3"
            />
            <Image
              className="w-[150px] h-auto lg:w-[180px] xl:w-[200px]"
              src={img4}
              alt="client 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;
