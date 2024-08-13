import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
    "India is a land of incredible diversity, offering travelers a rich tapestry of experiences. Begin your journey in the vibrant city of Delhi, where historical landmarks like the Red Fort and India Gate coexist with bustling markets and street food. Venture to Agra to witness the stunning Taj Mahal, a masterpiece of Mughal architecture. Explore the royal heritage of Rajasthan in cities like Jaipur, Udaipur, and Jaisalmer, known for their majestic palaces and desert landscapes. Head south to Kerala, often called ‘God’s Own Country,’ for serene backwaters and lush greenery. Don’t miss the spiritual allure of Varanasi, where you can witness the mesmerizing Ganga Aarti on the ghats. For nature enthusiasts, the Himalayan region offers breathtaking views and trekking opportunities in places like Shimla and Manali. From the architectural marvels of ancient temples to the vibrant local cultures, India promises a journey filled with unforgettable sights and experiences.",
    author: "Shrikavi",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
    "The United States is a vast country with a wide array of attractions for every type of traveler. Start in New York City, where the dazzling lights of Times Square and the expansive beauty of Central Park offer a dynamic urban experience. Travel to the West Coast to explore the stunning landscapes of the Grand Canyon and the dramatic coastline along Highway 1. In California, enjoy the glamour of Los Angeles and the charm of San Francisco with its iconic Golden Gate Bridge. Discover the rich history and cultural institutions in Washington, D.C., and savor the unique flavors and music of New Orleans. The Pacific Northwest offers natural wonders such as the stunning vistas of Seattle and the majestic beauty of Portland. Each region of the US offers distinct experiences, from the historic sites and museums to the natural beauty and vibrant cities, ensuring a memorable journey across the country.",
    author: "Nethra",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
    "Japan, a country where tradition and modernity coexist harmoniously, offers a plethora of experiences for travelers. Begin your exploration in Tokyo, a bustling metropolis known for its cutting-edge technology, shopping districts, and cultural landmarks like the Meiji Shrine. Head to Kyoto to immerse yourself in traditional Japan with its beautiful temples, shrines, and traditional tea ceremonies. Visit Osaka for its lively street food scene and vibrant nightlife. Venture to Hokkaido for pristine natural landscapes, hot springs, and skiing opportunities in the winter. Don’t miss Hiroshima, where you can reflect on history at the Peace Memorial Park and visit the nearby Miyajima Island, known for its iconic floating torii gate. Experience the cultural richness of Nara, with its ancient temples and friendly deer roaming the streets. Japan’s blend of ancient traditions and modern advancements, coupled with its stunning landscapes, makes it a captivating destination for any traveler.",
    author: "Raghul",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
