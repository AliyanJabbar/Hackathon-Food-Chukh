import React from "react";
import MenuPart from "../microComponents/menuPart";
import Image from "next/image";
import menuimg4 from "../../../public/assets/menu/menu4-img.png";
import coffee from "../../../public/assets/menu/Coffee.png";

const Menu4 = () => {
  return (
    <div className="flex flex-row justify-between gap-20 px-[7%] pt-[100px]">
      {/* image div */}
      <div>
        <Image className="w-[448px] h-[600px]" src={menuimg4} alt="menuimg1" />
      </div>
      {/* main content */}
      <div className="flex flex-col items-start">
        <Image className="w-[24px] h-[24px]" src={coffee} alt="coffee" />
        <h1 className="font-sans text-[48px] font-bold text-txtBlack mb-3">
          Starter Menu
        </h1>
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
  );
};

export default Menu4;
