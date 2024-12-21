"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import arrow from "../../../public/assets/icons/ArrowRight.png";
import caretLeft from "../../../public/assets/icons/CaretLeft.png";
import caretLeftBack from "../../../public/assets/icons/CaretLeft checkout.png";
import Link from "next/link";

const CheckoutPage = () => {
  interface CountryCityMap {
    [country: string]: string[];
  }
  const countryCityMapping: CountryCityMap = {
    Pakistan: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    America: ["New York", "Los Angeles", "Chicago", "Houston"],
    Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
  };

  const [checked, setChecked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [cities, setCities] = useState(countryCityMapping["Pakistan"]);
  const [successMessage,setSuccessMessage] = useState<string>("")

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCities(countryCityMapping[country] || []);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const { cart } = useCart();

  // Calculate total bill
  const totalBill = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  // calculating tax
  let tax = Math.round(8.1 * cart.length);

  // calculating discount
  let discount = totalBill * 0.25;

  // validating form
  interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    zipCode?: string;
    address1?: string;
  }

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    value.trim() !== "" &&
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error for the field that was updated
      }));
  };

  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
    address1: string;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    address1: "",
  });
  const validateForm = () => {
    const errors: any = {};

    if (!formValues.firstName.trim())
      errors.firstName = "First name is required.";
    if (!formValues.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Invalid email address.";
    }
    if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
    if (!formValues.zipCode.trim()) errors.zipCode = "Zip code is required.";
    if (!formValues.address1.trim()) errors.address1 = "Address 1 is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formValues);
      setSuccessMessage("Order Has Been Placed Successfully!")
      setTimeout(()=>{setSuccessMessage("")},4000)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white text-black py-[100px] min-h-screen md:px-[7%] px-[3%]">
        {/* success message */}
      {successMessage && (
        <div className="fixed top-5 right-5 bg-orangeLike text-white px-4 py-2 rounded shadow-lg z-50">
          {successMessage}
        </div>
      )}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Address */}
          <div className="lg:col-span-2">
            <h2 className="text-[20px] font-bold font-sans mb-4">
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* first name */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  First name
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.firstName}
                  name="firstName"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.firstName}
                  </p>
                )}
              </div>
              {/* last name */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.lastName}
                  name="lastName"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                  name="email"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone number
                </label>
                <input
                  type="tel"
                  onChange={handleInputChange}
                  value={formValues.phone}
                  name="phone"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="p-3 rounded border border-outline w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Country
                </label>
                <select
                  className="p-3 rounded border border-outline w-full"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {Object.keys(countryCityMapping).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">City</label>
                <select className="p-3 rounded border border-outline w-full">
                  {cities.length > 0 ? (
                    cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))
                  ) : (
                    <option>Choose city</option>
                  )}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Zip code
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.zipCode}
                  name="zipCode"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.zipCode}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Address 1
                </label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.address1}
                  name="address1"
                  className="p-3 rounded border border-outline w-full"
                />
                {formErrors.address1 && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.address1}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Address 2
                </label>
                <input
                  type="text"
                  className="p-3 rounded border border-outline w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[20px] font-bold font-sans mb-4">
                Billing Address
              </h2>
              {/* checkbox address */}
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="inline-flex items-center cursor-pointer gap-2"
                >
                  <input
                    id="address"
                    type="checkbox"
                    className="peer hidden"
                    onChange={handleCheckboxChange}
                    defaultChecked
                  />
                  <span className="w-[20px] h-[20px] border-2 border-gray-300 rounded-none flex justify-center items-center peer-checked:bg-orangeLike peer-checked:border-none">
                    <svg
                      className="w-4 h-4 text-white peer-checked:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span className="select-none text-[12px] lg:text-[14px] font-sans">
                    Same as shipping address
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link
                href="/shoppingCart"
                className="flex items-center justify-center gap-1 text-black px-6 py-[10px] border border-outline"
              >
                <Image src={caretLeftBack} alt="caretLeftBack" />
                Back to cart
              </Link>
              <button
                type="submit"
                className="flex items-center justify-center gap-1 bg-orangeLike text-white px-6 py-[10px]"
              >
                Proceed to shipping <Image src={caretLeft} alt="caretLeft" />
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-6 rounded border border-outline">
            <div className="space-y-4 h-[300px] overflow-y-auto scrollbar-thin">
              {cart.map((item, ind) => (
                <div key={ind} className="flex items-center gap-1">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20"
                  />
                  <div className="ml-2 flex flex-col gap-2">
                    <h3 className="font-bold text-[16px] font-sans">
                      {item.name}
                    </h3>
                    <p className="text-txtGray text-sm">150 gm net</p>
                    <p className="text-txtGray text-sm">{item.price}$</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-300 pt-4 space-y-2">
              <div className="flex justify-between">
                <p className="text-txtGray text-[16px]">Sub-total</p>
                <p className="text-txtBlack text-[16px]">{totalBill}$</p>
              </div>
              <div className="flex justify-between">
                <p className="text-txtGray text-[16px]">Shipping</p>
                <p className="text-txtBlack text-[16px]">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="text-txtGray text-[16px]">Discount</p>
                <p className="text-txtBlack text-[16px]">25%</p>
              </div>
              <div className="flex justify-between pb-2">
                <p className="text-txtGray text-[16px]">Tax</p>
                <p className="text-txtBlack text-[16px]">{tax}$</p>
              </div>
              <hr />
              <div className="flex justify-between pt-3 text-[18px] text-txtBlack">
                <p>Total</p>
                <p className="font-bold ">
                  {totalBill > 0 ? totalBill + tax - discount : totalBill}$
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 mt-6 bg-orangeLike text-white text-[18px] w-full py-3 rounded"
            >
              Place an order
              <Image
                className="group-hover:translate-x-2 transition-all duration-300"
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;
