import React from "react";
import Link from "next/link";

const RoundBtn = (props: { text: string; link: string }) => {
  return (
    <div>
      <Link href={props.link}>
        <button className="my-3 bg-orangeLike py-4 px-12 text-white rounded-full text-[16px] font-[300]">
          {props.text}
        </button>
      </Link>
    </div>
  );
};

export default RoundBtn;
