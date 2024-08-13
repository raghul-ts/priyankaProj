

import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Experience a luxurious boat tour through the scenic waterways of the USA, offering breathtaking views and a relaxing atmosphere.",
    price: 55000,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description: "Visit the Taj Mahal, a stunning ivory-white marble mausoleum renowned for its intricate architecture and historical significance, located in Agra, India.",
    price: 60000,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description: "Explore the wonders of underwater adventures, from vibrant marine life to stunning coral reefs in the USA’s most beautiful aquatic destinations.",
    price: 50000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description: "Discover the vibrant city of Sydney, known for its iconic Opera House, beautiful harbors, and lively cultural scene.",
    price: 55000,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United States",
    description: "Enjoy the glamour of Los Angeles, with its Hollywood attractions, beautiful beaches, and thriving arts and entertainment scene.",
    price: 58000,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    description: "Experience the excitement of Las Vegas, famous for its vibrant nightlife, world-class entertainment, and luxurious casinos.",
    price: 53000,
    type: "Cultural Relax",
  },
];


const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
