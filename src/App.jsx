import React from "react";
import bgImage from "./Images/f1.jpg";
import Pakistan from "./Images/pak.jpg";
import Oman from "./Images/uae.jpg";
import SaudiArab from "./Images/sa.jpg";
import Logo from "./Images/Logo2.png";

// WhatsApp Button Component
const WhatsAppButton = () => {
  const phoneNumber = "923034097371";
  const message = encodeURIComponent("Hello! We want to make some bookings from Golden Basra Travels.");

  const openWhatsApp = () => {
    const url = /Android|iPhone/i.test(navigator.userAgent)
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
    >
      Chat on WhatsApp
    </button>
  );
};

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white font-semibold relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      {/* Navbar */}
      <nav className="backdrop-blur-md absolute top-0 w-full flex justify-between items-center bg-white/65 py-2 px-20 shadow-sm">
        <img src={Logo} alt="Logo" className="w-30 h-25" />
        <div className="flex gap-10 text-black font-medium text-lg">
          <a href="#" className="hover:text-gray-600 text-xl font-bold">
            Why Us
          </a>
          <a href="#" className="hover:text-gray-600 text-xl font-bold">
            Our Offers
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <h1 className="text-6xl font-bold mb-4 text-center mt-20">
        Welcome To Golden Basra Travels!
      </h1>
      <p className="text-2xl mb-10 text-center max-w-6xl">
        Discover the rich cultures of Pakistan, the stunning landscapes of Oman, and the vibrant cities of the UAE.
      </p>

      {/* Countries Section */}
      <div className="bg-white rounded-4xl py-6 px-12 flex gap-8 items-center justify-center shadow-lg mt-6">
        <img src={Pakistan} alt="Pakistan" className="w-24 h-24 rounded-full" />
        <img src={Oman} alt="Oman" className="w-24 h-24 rounded-full" />
        <img src={SaudiArab} alt="Saudi Arab" className="w-24 h-24 rounded-full" />
        <WhatsAppButton />
      </div>
    </div>
  );
}
