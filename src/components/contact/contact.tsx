"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import burger from "../../../public/assets/home3-img2.png";
// icons
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const poppins = Poppins({ weight: ["600", "500", "400"], subsets: ["latin"] });

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormData>;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState("");

  // Handle form changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors as user types
  };

  // Validate form fields
  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handle form submission
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResult("Sending...");
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append("access_key", "162e04fa-6b5a-44ed-835c-6a1f4167d345");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setTimeout(() => {
          setResult("");
        }, 3000);
        formElement.reset(); // Reset the form
        setFormData({ name: "", email: "", message: "" }); // Reset state
      } else {
        console.error("Error", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("An unexpected error occurred.");
    }
  };

  return (
    <main className="relative">
      <div
        className={`${poppins.className} flex flex-col lg:flex-row items-center justify-between py-[100px] px-[7%]`}
      >
        {/* left side */}
        <div className="flex flex-col items-start justify-start text-left space-y-10 w-full lg:w-[50%]">
          {/* upper text */}
          <div>
            <h1 className="text-[36px] lg:text-[48px] font-bold text-orangeLike">
              Get in touch
            </h1>
            <p className="text-[16px] lg:text-[18px] font-[500]">
              We are here for you! How can we help?
            </p>
          </div>
          {/* form */}
          <form onSubmit={onSubmit} className="w-full lg:w-[400px]">
            <div className="space-y-3">
              {/* Name Input */}
              <div className="flex flex-col text-[18px] font-[400] group">
                <label
                  htmlFor="name"
                  className="group-focus-within:text-orangeLike transition-all duration-200 my-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white h-[50px] py-2 px-5 rounded-md border-[2px] border-orangeLike outline-none focus:shadow-md transition-all duration-200"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col text-[18px] font-[400] group">
                <label
                  htmlFor="email"
                  className="group-focus-within:text-orangeLike transition-all duration-200 my-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white h-[50px] py-2 px-5 rounded-md border-[2px] border-orangeLike outline-none focus:shadow-md transition-all duration-200"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col text-[18px] font-[400] group">
                <label
                  htmlFor="message"
                  className="group-focus-within:text-orangeLike transition-all duration-200 my-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="py-2 px-5 bg-white rounded-md border-[2px] border-orangeLike outline-none focus:shadow-md transition-all duration-200 resize-none"
                  cols={35}
                  rows={5}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="p-3 w-full bg-orangeLike hover:bg-orange-500 transition-colors duration-150 text-white font-bold text-[18px] rounded-lg mt-16"
            >
              Submit
            </button>
          </form>
          {result && <p className="mt-5 text-green-500 font-bold">{result}</p>}
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-7 w-full lg:w-[50%] mt-10 lg:mt-0">
          {/* image */}
          <div className="relative group overflow-hidden rounded-[50px] w-[290px] min-[600px]:w-[500px] lg:w-[450px] ">
            {/* main image  */}
            <Image
              className="rounded-[50px] w-[300px] min-[600px]:w-[500px] lg:w-[450px] h-auto transition-transform duration-300 group-hover:scale-110"
              src={burger}
              alt="burger"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-[16px] lg:text-[20px] font-bold">
                Let’s cook up a conversation!
              </p>
            </div>
          </div>

          {/* contact info */}
          <div className="flex flex-col gap-4">
            <p className="flex gap-3">
              <GrLocation className="text-orangeLike w-[20px] h-auto" /> 545
              Foody Island, IL 99191
            </p>
            <p className="flex gap-3">
              <BsTelephone className="text-orangeLike w-[20px] h-auto" /> +2034
              4040 3030
            </p>
            <p className="flex gap-3">
              <AiOutlineMail className="text-orangeLike w-[20px] h-auto" />
              foodtuck@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-[20px] lg:bottom-[110px] right-0 bg-white contactIconsShadow rounded-xl rounded-r-none p-4 flex gap-4 lg:flex-col">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hover:-translate-x-3  max-[1023px]:hover:-translate-y-3 transition-all duration-300"
        >
          <FaFacebookF className="text-white bg-orangeLike rounded-xl p-2 w-[40px] h-[40px] flex items-center justify-center shadow-md" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hover:-translate-x-3  max-[1023px]:hover:-translate-y-3 transition-all duration-300"
        >
          <FaInstagram className="text-white bg-orangeLike rounded-xl p-2 w-[40px] h-[40px] flex items-center justify-center shadow-md" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hover:-translate-x-3 max-[1023px]:hover:-translate-y-3 transition-all duration-300"
        >
          <FaLinkedinIn className="text-white bg-orangeLike rounded-xl p-2 w-[40px] h-[40px] flex items-center justify-center shadow-md" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hover:-translate-x-3 max-[1023px]:hover:-translate-y-3 transition-all duration-300"
        >
          <FaTwitter className="text-white bg-orangeLike rounded-xl p-2 w-[40px] h-[40px] flex items-center justify-center shadow-md" />
        </Link>
      </div>
    </main>
  );
};

export default ContactPage;
