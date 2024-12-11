import Image from "next/image";
import React from "react";
import menuimg1 from "../../../public/assets/menu/menu1-img.png";
import coffee from "../../../public/assets/menu/Coffee.png";
import MenuPart from "../microComponents/menuPart";

const Menu1 = () => {
  return (
    <div className="flex flex-col-reverse min-[1200px]:flex-row justify-between gap-8 min-[1200px]:gap-20 px-6 min-[1200px]:px-[7%] pt-[60px] min-[1200px]:pt-[100px]">
      {/* Image Section */}
      <div className="flex justify-center min-[1300px]:justify-start px-[7%] md:px-0">
        <Image
          className="w-[300px] h-[400px] sm:w-[350px] sm:h-[500px] min-[1200px]:w-[448px] min-[1300px]:h-[600px]"
          src={menuimg1}
          alt="menuimg1"
        />
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-start">
        {/* Icon */}
        <Image
          className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] min-[1200px]:h-[24px]"
          src={coffee}
          alt="coffee"
        />
        {/* Heading */}
        <h1 className="font-sans text-[28px] sm:text-[36px] min-[1200px]:text-[48px] font-bold text-txtBlack mb-3">
          Starter Menu
        </h1>
        {/* Menu Items */}
        <div className="space-y-4">
          <MenuPart
            title="Alder Grilled Chinook Salmon"
            recipe="Toasted French bread topped with romano, cheddar"
            cal="560 CAL"
            price="32$"
          />
          <MenuPart
            title="Berries and creme tart"
            recipe="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
            price="43$"
          />
          <MenuPart
            title="Tormentoso Bush Pizza Pintoage"
            recipe="Ground cumin, avocados, peeled and cubed"
            cal="1000 CAL"
            price="14$"
          />
          <MenuPart
            title="Spicy Vegan Potato Curry"
            recipe="Spreadable cream cheese, crumbled blue cheese"
            cal="560 CAL"
            price="35$"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu1;
