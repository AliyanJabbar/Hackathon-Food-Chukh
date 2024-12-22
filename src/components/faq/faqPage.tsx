"use client";
import { useState } from "react";
import Button from "../microComponents/button";
import { useCart } from "@/context/CartContext";

const FAQ = () => {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  const {cart} = useCart()

  //   functionality
  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter((i) => i !== index)); // Close if already open
    } else {
      setOpenFAQs([...openFAQs, index]); // Open if not already open
    }
  };
  //storing data here
  const faqData = [
    {
      question: "How we serve food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <section className="py-[100px] md:px-[7%] px-[3%]">
     <h2 className="text-[48px] text-txtBlack font-bold font-sans text-center mb-1">
        Questions Looks Here
      </h2>
      <p className="text-center text-txtGray text-[16px] mb-14">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg bg-faqEntry ${
              openFAQs.includes(index) ? "shadow-md" : "shadow-none"
            } transitionall duration-200`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg text-txtBlack font-bold">
                {faq.question}
              </h3>
              <button
                className="text-2xl font-bold text-gray-500"
                aria-label="Toggle FAQ"
              >
                {openFAQs.includes(index) ? "−" : "+"}
              </button>
            </div>
            {openFAQs.includes(index) && (
              <p className="mt-3 text-txtGray">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
   
  );
};

export default FAQ;
