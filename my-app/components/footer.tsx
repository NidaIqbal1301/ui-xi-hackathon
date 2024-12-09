import React from "react";

const Footer = () => {
  return (
    <div className="h-96 bg-[#2A254B] ">
      <div className="flex space-x-8 pt-10 pl-20">
        <div>
          <h1 className="text-white text-lg  font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>
        <div>
          <h1 className="text-white text-lg font-Clash Display ml-20">
            Catergory
          </h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chiar</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <p className="text-white mt-4 text-sm ">About Us</p>
          <p className="text-white mt-4 text-sm ">Vacancies</p>
          <p className="text-white mt-4 text-sm ">Contact Us</p>
          <p className="text-white mt-4 text-sm ">Privacy</p>
          <p className="text-white mt-4 text-sm ">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">
            Join our mailing list
          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-[#FFFFFF26] w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-white h-12 w-32 rounded-sm mt-1">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-t-2 m-auto w-11/12 my-8 flex items-center sm:flex-row flex-col"> 
      
      <p className="text-white mt-4 text-sm ">
        Copyright 2022 Avion LTD
        </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href="http://facebook.com "className="text-gray-500">
          
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="http://twitter.com" className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href="http://www.instagram.com" className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a href="http://www.linkedin.com" className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
      <img src="/images/social Links.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;