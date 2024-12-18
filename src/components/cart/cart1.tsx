"use client";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { GrSubtract } from "react-icons/gr";
import { PiCheckSquareOffset } from "react-icons/pi";
import { useCart } from "@/context/CartContext";
import Btn from "../microComponents/button";
const ProductTable: React.FC = () => {
  const { cart, updateQuantity, removeProduct } = useCart();

  // Calculate total bill
  const totalBill = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  // updating quantity
  const handleQuantityChange = (id: number, quantityChange: number) => {
    updateQuantity(id, quantityChange);
  };

  // removing product
  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
  };

  return (
    <div className="py-[100px]">
      {cart.length > 0 ? (
        <>
          {/* Cart with items */}
          <div className="overflow-x-auto px-[7%]">
            {/* Desktop View Table */}
            <div className="hidden md:block">
              <table className="min-w-full text-txtBlack">
                <thead>
                  <tr className="font-bold text-[18px]">
                    <th className="px-6 py-3 text-left">Product</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-center">Quantity</th>
                    <th className="px-6 py-3 text-left">Total</th>
                    <th className="px-6 py-3 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id} className="border-b border-gray-200">
                      <td className="px-6 py-4 flex items-center space-x-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded"
                        />
                        <div>
                          <p className="font-bold text-[18px]">
                            {product.name}
                          </p>
                          <div className="rating rating-sm space-x-[6px]">
                            {[...Array(5)].map((_, index) => (
                              <input
                                key={index}
                                type="radio"
                                className={`mask mask-star-2 ${
                                  index >= product.rating
                                    ? "bg-txtGray"
                                    : "bg-orangeLike"
                                }`}
                                defaultChecked={index + 1 === product.rating}
                                disabled
                              />
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex outline outline-1 outline-outline rounded-full h-[27px] items-center justify-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className={`pl-3 py-1 text-[13px] ${
                              product.quantity > 1
                                ? "text-black"
                                : "text-outline"
                            }`}
                          >
                            <GrSubtract />
                          </button>
                          <span className="px-2">{product.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="pr-3 py-1 text-[22px]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-[16px]">
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="text-txtBlack group"
                        >
                          <IoCloseOutline className="group-hover:text-orangeLike w-[25px] h-[25px] transition-color duration-100 translate-x-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col p-4 border-b border-gray-200 mb-6"
                >
                  {/* Product details */}
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <p className="font-bold text-[18px]">{product.name}</p>
                      <div className="rating rating-sm space-x-[6px]">
                        {[...Array(5)].map((_, index) => (
                          <input
                            key={index}
                            type="radio"
                            className={`mask mask-star-2 ${
                              index >= product.rating
                                ? "bg-txtGray"
                                : "bg-orangeLike"
                            }`}
                            defaultChecked={index + 1 === product.rating}
                            disabled
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Price, Quantity, Total */}
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Price:</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Quantity:</span>
                    <div className="inline-flex outline outline-1 outline-outline rounded-full h-[27px] items-center justify-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className={`pl-3 py-1 text-[13px] ${
                          product.quantity > 1 ? "text-black" : "text-outline"
                        }`}
                      >
                        <GrSubtract />
                      </button>
                      <span className="px-2">{product.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="pr-3 py-1 text-[22px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Total:</span>
                    <span>
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-txtBlack group"
                    >
                      <IoCloseOutline className="group-hover:text-orangeLike w-[25px] h-[25px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Checkout with coupon */}
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-[7%] pt-28 bg-white gap-6">
            {/* Coupon code */}
            <div className="w-full md:w-[648px]">
              <h2 className="text-2xl md:text-[32px] font-bold text-txtBlack mb-4">
                Coupon Code
              </h2>
              <div className="border border-gray-300 rounded-lg p-4 md:p-6 w-full">
                <p className="text-txtlight text-sm mb-4 leading-relaxed">
                  Enter a coupon code to receive a discount on your purchase.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:-space-x-1">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="flex-1 border border-gray-300 rounded-md py-2 md:py-[14px] px-4 text-gray-700 focus:outline-none placeholder:text-txtlight mb-3 sm:mb-0"
                  />
                  <button className="bg-orangeLike hover:bg-orange-500 text-white leading-[26px] text-base md:text-[18px] py-2 md:py-[14px] px-4 rounded-md transition-all duration-200 w-full sm:w-auto">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Total bill */}
            <div className="w-full md:w-[648px]">
              <h2 className="text-2xl md:text-[32px] font-bold text-txtBlack mb-4">
                Total Bill
              </h2>
              <div className="border border-gray-300 rounded-lg p-4 md:p-6 w-full">
                <div className="space-y-4">
                  <div className="flex justify-between text-txtBlack">
                    <span className="font-bold">Cart Subtotal</span>
                    <span className="text-gray-800 font-bold">
                      ${totalBill.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-txtGray">
                    <span>Shipping Charge</span>
                    <span>$0.00</span>
                  </div>
                  <hr className="-mx-4 md:-mx-6 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] border-t border-gray-300" />
                  <div className="flex justify-between text-txtBlack text-lg font-bold">
                    <span>Total Amount</span>
                    <span>${totalBill.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="inline-flex items-center gap-2 bg-orangeLike hover:bg-orange-500 text-white text-[18px] py-2 md:py-[14px] px-6 md:px-8 transition-all duration-300 w-full md:w-auto mt-4">
                  Proceed to Checkout <PiCheckSquareOffset />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-10 justify-center items-center h-[200px]">
          <h2 className="text-3xl font-bold text-orangeLike">
            Your cart is empty
          </h2>
          <Btn text="Go To Shop" link="/shop" />
        </div>
      )}
    </div>
  );
};

export default ProductTable;
