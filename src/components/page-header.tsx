import Image from "next/image";
import React from "react";
import caretRight from "../../public/assets/icons/CaretRight.png";

const PageHeader = (props: { heading: string; title: string }) => {
  return (
    <div>
      {/* div with background Image */}
      <div className="bg-page-header h-[320px] bg-cover bg-center w-full text-white flex items-center justify-center">
        {/* text on the image */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-sans text-[48px] font-bold text-center">{props.heading}</h1>
          <div className="flex items-center gap-2">
            <span>Home</span>
            <Image
              src={caretRight}
              alt="caretRight"
              className="w-[16px] h-[16px]"
            />
            <span className="text-orangeLike">{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
