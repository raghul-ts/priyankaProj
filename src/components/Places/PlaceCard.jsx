import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import OrderPopup from "../OrderPopup/OrderPopup";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
}) => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleNext = () => {
    setSelectedPrice(price);
    setOrderPopup(true);
  };

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleNext}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">₹{price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render OrderPopup based on orderPopup state */}
      {orderPopup && (
        <OrderPopup 
          orderPopup={orderPopup} 
          setOrderPopup={setOrderPopup} 
          selectedPrice={selectedPrice} 
        />
      )}
    </>
  );
};

export default PlaceCard;
