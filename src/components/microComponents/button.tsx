import Link from "next/link";
import React from "react";

const Button = (props: { text: string; link: string }) => {
  return (
    <div className="w-fit">
      <Link href={props.link}>
        <button className="my-3 bg-orangeLike py-4 px-12 text-white text-[18px] font-bold rounded-md font-sans text-nowrap">
          {props.text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
