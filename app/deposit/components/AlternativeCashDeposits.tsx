"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePaths from "@/app/constants/ImagePaths";
import Modal from "./Modal";

export default function AlternativeCashDeposits() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    image: string;
  } | null>(null);

  // Alternative cash deposit items with images
  const paymentItems = [
    { name: "Visa", image: ImagePaths.cash.visa, size: 60 },
    { name: "Mastercard", image: ImagePaths.cash.mastercard, size: 120 },
    { name: "PayPal", image: ImagePaths.cash.paypal, size: 100 },
    { name: "Apple Pay", image: ImagePaths.cash.applepay, size: 80 },
    { name: "Google Pay", image: ImagePaths.cash.googlepay, size: 120 },
  ];

  const handleItemClick = (item: { name: string; image: string }) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-4xl px-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-left">
          Alternative Cash Deposits
        </h3>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          style={{ height: "72px" }}
        >
          {paymentItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleItemClick(item)}
              className="text-center p-2 md:p-3 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:bg-gray-700"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={item.size}
                height={40}
                className=" transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedItem={selectedItem}
        title={
          selectedItem
            ? `${selectedItem.name} Deposit with SWAPPED`
            : "Payment Method"
        }
        layout="payment"
      />
    </>
  );
}
