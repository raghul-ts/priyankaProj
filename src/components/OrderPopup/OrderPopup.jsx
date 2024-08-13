import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const OrderPopup = ({ orderPopup, setOrderPopup, selectedPrice }) => {
  
  const [formData, setFormData] = useState({
    totalAmount: selectedPrice,
  });
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [add, setAdd] = useState();
  const navigate = useNavigate();
    const handleSubmit = (e) => {
      
      e.preventDefault();
      axios.post('http://localhost:3001/pay', {name, email, add, selectedPrice})
      .then(result => {
        navigate('/');
      })
      .catch(error => console.log(error));

    const shipping_address = {
      first_name: formData.fname,
      last_name: formData.lname,
      address: formData.address,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postcode: formData.pincode,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(formData.totalAmount) * 100,
      currency: "INR",
      name: "Web Mastery",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
        setFormData({
          totalAmount: "",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }

  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 rounded-md shadow-lg p-6 w-full max-w-sm mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                Pay and book your travel
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-gray-800 dark:text-white"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <form onSubmit={handleSubmit}>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"

                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-gray-800 dark:text-white"
              />
              <input
                type="email"

                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-gray-800 dark:text-white"
              />
              <input
                type="text"

                placeholder="Address"
                onChange={(e) => setAdd(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-gray-800 dark:text-white"
              />
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  Total Price:
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  ₹{selectedPrice}
                </p>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-200 text-white py-2 px-6 rounded-full">
                  Book Now
                </button>
              </div>

            </div>
          </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
