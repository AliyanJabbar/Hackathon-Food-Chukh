import React from "react";
import Button from "./button";

const Modal = () => {
  return (
    <div className="bg-blackish">
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        Pages
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Pages:</h3>
          <div className="flex flex-col items-center -space-y-3 justify-center">
            <Button text="Not Found Page" link="/notFound" />
            <Button text="Sign Up" link="/signUp" />
            <Button text="FAQ" link="/faq" />
            <Button text="Checkout" link="/checkout" />
            <Button text="Cart" link="/shoppingCart" />
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
