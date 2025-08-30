import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Photos from "../components/Photos";
import News from "../components/News";
import Members from "../components/Members";
import image from '../assets/village2.png'

const Home = () => {
  const [panchayat, setPanchayat] = useState({});
  const [photos, setPhotos] = useState([]);
  const [news, setNews] = useState([]);
  const [members, setMembers] = useState([]);
  const backendUrl = 'https://grampanchant-project.onrender.com'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pRes, phRes, nRes, mRes] = await Promise.all([
        axios.get(`${backendUrl}/api/panchayat`),
        axios.get(`${backendUrl}/api/photos`),
        axios.get(`${backendUrl}/api/news`),
        axios.get(`${backendUrl}/api/members`),
        ]);
        setPanchayat(pRes.data);
        setPhotos(phRes.data);
        setNews(nRes.data);
        setMembers(mRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <header className="bg-black text-white py-16 px-6">

      <h1 className="text-6xl my-200px md:text-7xl font-extrabold text-center  bg-clip-text text-transparent 
                     bg-gradient-to-r from-red-500 via-green-400 to-pink-500 animate-gradient-x
                     animate-rise-fall ">
        Gram Panchayat Longwala
      </h1>
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">


    
    {/* Left Section: Paragraph */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-bold text-yellow-400">Welcome to Gram Panchayat Longwala</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Gram Panchayat Longwala is dedicated to the development and welfare of our community. 
        Our vision is to create a sustainable, inclusive, and thriving village for all residents. 
        Here you can explore news, updates, gallery, and meet our members who work tirelessly 
        to improve our village life.
      </p>
    </div>

    {/* Right Section: Gradient Title + Image */}
    <div className="md:w-1/2 relative flex flex-col items-center justify-center">
      {/* Gradient Title with up-down animation */}

      {/* Image Box */}
      <div className="mt-8 w-80 h-80 md:w-96 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
        <img 
          src={image}  // replace with your image path
          alt="Gram Panchayat Longwala"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

  </div>
</header>



      {/* <Photos photos={photos} /> */}
      <Photos photos={Array.isArray(photos) ? photos : []} />
      {/* <News news={news} /> */}
      <News news={Array.isArray(news) ? news : []} />
      {/* <Members members={members} /> */}
      <Members members={Array.isArray(members) ? members : []} />

      <Footer panchayat={panchayat} />
    </div>
  );
};

export default Home;



