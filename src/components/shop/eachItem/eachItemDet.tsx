import React, { useState } from "react";

const EachItemDet = (props: { TotalReviews: number; reviews: string[] }) => {
  // State to track which button is focused
  const [focusedButton, setFocusedButton] = useState("description");

  return (
    <div className="px-[7%] pb-[50px]">
      <div className="flex gap-2">
        {/* Description Button */}
        <button
          className={`py-3 px-7 transition-all duration-200 ${
            focusedButton === "description"
              ? "bg-orangeLike text-white"
              : "text-black hover:bg-orangeLike hover:text-white"
          }`}
          onClick={() => setFocusedButton("description")}
        >
          Description
        </button>

        {/* Reviews Button */}
        <button
          className={`py-3 px-7 transition-all duration-200 ${
            focusedButton === "reviews"
              ? "bg-orangeLike text-white"
              : "text-black hover:bg-orangeLike hover:text-white"
          }`}
          onClick={() => setFocusedButton("reviews")}
        >
          Reviews ({props.TotalReviews})
        </button>
      </div>

      {/* Content */}
      {focusedButton === "description" ? (
        <div>
          <p className="my-7 text-txtlight">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
            sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
            Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </p>
          <p className="my-7 text-txtlight">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </p>
          <h3 className="text-[18px] font-sans text-txtGray my-5">Key Benefits</h3>
          <ul className="list-disc list-inside text-txtGray">
            <li className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="mt-3">
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className="mt-3">
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li className="mt-3">
              Etiam nec massa et lectus faucibus ornare congue in nunc.
            </li>
            <li className="mt-3">Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>
      ) : (
        <div className="mt-5 space-y-5">
          {props.reviews.map((review, ind: number) => (
            <div
              key={ind}
              className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-sm text-gray-700">{review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EachItemDet;
