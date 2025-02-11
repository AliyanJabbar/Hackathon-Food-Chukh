"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import getImageUrl from "@/scripts/getImage";

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
}

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  _id: string;
  orderId: string;
  customerDetails: CustomerDetails;
  items: OrderItem[];
  totalAmount: number;
  orderDate: string;
  status: string;
}

const OrderTable: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const fetchOrder = async () => {
    setIsLoading(true);
    const query = `*[_type == "order" && orderId == "${searchTerm}"][0] {
      orderId,
      customerDetails {
        firstName,
        lastName,
        email,
        phone,
        address,
        zipCode
      },
      items[]{
        name,
        price,
        quantity,
        image
      },
      totalAmount,
      orderDate,
      status
    }`;

    try {
      const data = await client.fetch(query);
      if (data) {
        setOrder(data);
        setNoResults(false);
      } else {
        setOrder(null);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setOrder(null);
      setNoResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowResults(true);
      fetchOrder();
    }
  };

  const toggleRowExpansion = (orderId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 p-2 sm:p-4 md:p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-7xl"
      >
        <div className="mb-4 md:mb-8 bg-white p-4 md:p-8 rounded-3xl shadow-lg border border-gray-100">
          <h1 className="text-2xl md:text-4xl text-txtBlack font-bold">
            Order <span className="text-orangeLike">Lookup</span>
          </h1>
          <p className="text-txtGray mt-2 md:mt-3 text-base md:text-lg">
            Track your order status with Order ID
          </p>
        </div>

        <motion.div
          className="mb-4 md:mb-6 bg-white p-4 md:p-8 rounded-3xl shadow-lg border"
          whileHover={{ scale: 1.01 }}
        >
          <div className="relative flex items-center">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-txtlight text-xl md:text-2xl" />
            <input
              type="text"
              placeholder="Enter your Order ID"
              className="w-full pl-12 md:pl-14 pr-20 md:pr-24 py-3 md:py-5 border-2 border-outline rounded-2xl outline-none focus:border-orangeLike transition-all duration-300 text-base md:text-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 px-4 py-2 bg-orangeLike rounded-xl hover:bg-orange-600 text-white transition-colors duration-300 flex items-center gap-2"
            >
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 md:mt-6 overflow-x-auto"
            >
              {isLoading ? (
                <div className="flex justify-center items-center p-8 bg-white rounded-3xl shadow-lg">
                  <h1 className="text-txtBlack text-4xl flex items-end">
                    Loading
                    <span className="loading loading-dots loading-lg text-orangeLike ml-2"></span>
                  </h1>
                </div>
              ) : order ? (
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                  <table className="min-w-full divide-y divide-outline">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider">
                          Expand
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider">
                          Order ID
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider hidden md:table-cell">
                          Customer
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider hidden lg:table-cell">
                          Email
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider hidden lg:table-cell">
                          Phone
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-5 text-left text-xs md:text-sm font-semibold text-txtGray uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-outline">
                      <tr className="hover:bg-orange-50 transition-all duration-300">
                        <td className="px-3 md:px-6 py-3 md:py-5">
                          <button
                            onClick={() => toggleRowExpansion(order.orderId)}
                            className="text-orangeLike hover:text-orange-600 transition-colors p-2 rounded-full hover:bg-orange-100"
                          >
                            {expandedRows[order.orderId] ? (
                              <FiChevronUp className="w-4 h-4 md:w-6 md:h-6" />
                            ) : (
                              <FiChevronDown className="w-4 h-4 md:w-6 md:h-6" />
                            )}
                          </button>
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-sm md:text-base font-medium text-gray-900">
                          {order.orderId}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-sm md:text-base text-txtBlack font-medium hidden md:table-cell">{`${order.customerDetails.firstName} ${order.customerDetails.lastName}`}</td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-sm md:text-base text-txtBlack hidden lg:table-cell">
                          {order.customerDetails.email}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-sm md:text-base text-txtBlack hidden lg:table-cell">
                          {order.customerDetails.phone}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-sm md:text-base font-medium text-gray-900">
                          ${order.totalAmount.toFixed(2)}
                        </td>
                        <td className="px-3 md:px-6 py-3 md:py-5">
                          <span
                            className={`px-2 md:px-4 py-1 md:py-2 inline-flex text-xs md:text-sm leading-5 font-semibold rounded-full
                                ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Pending"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : order.status === "Cancelled"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-blue-100 text-blue-800"
                                }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                      {expandedRows[order.orderId] && (
                        <tr className="bg-orange-50/30">
                          <td colSpan={7} className="px-3 md:px-6 py-4 md:py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                              <div className="space-y-3 md:space-y-4">
                                <h4 className="text-base md:text-lg font-semibold">
                                  Customer{" "}
                                  <span className="text-orangeLike">
                                    Details
                                  </span>
                                </h4>
                                <div className="shadow-sm hover:shadow-md transition bg-white p-3 md:p-4 rounded-lg">
                                  <p className="text-sm md:text-base">
                                    Address: {order.customerDetails.address}
                                  </p>
                                  <p className="text-sm md:text-base">
                                    Zip Code: {order.customerDetails.zipCode}
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-3 md:space-y-4">
                                <h4 className="text-base md:text-lg font-semibold">
                                  Order{" "}
                                  <span className="text-orangeLike">Items</span>
                                </h4>
                                <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                  {order.items.map((item, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between py-2 text-sm md:text-base"
                                    >
                                      <div className="flex items-center gap-3">
                                        <Image
                                          src={getImageUrl(item.image)}
                                          alt={item.name}
                                          width={50}
                                          height={50}
                                          className="rounded-md object-cover"
                                        />
                                        <span>{item.name}</span>
                                      </div>
                                      <span>Qty: {item.quantity}</span>
                                      <span>${item.price}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                noResults && (
                  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
                    <h3 className="text-xl font-semibold text-txtBlack">
                      No Order Found
                    </h3>
                    <p className="text-txtGray mt-2">
                      Please check your Order ID and try again
                    </p>
                  </div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default OrderTable;
