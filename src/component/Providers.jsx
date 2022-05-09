import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

import MTN from "../assets/MTN.png";
import etisalat from "../assets/9mobile.png";
import GLO from "../assets/glo.png";
import Airtel from "../assets/airtel.png";
import Spectranet from "../assets/Spectranet-Data-Plans 1.jpg";
import Smile from "../assets/download (5) 1.png";

const Providers = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <div className="grid grid-rows-2 grid-gap-10 md:grid-cols-3 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object-cover" src={MTN} alt="/" />
        <img className="w-full h-full object-cover" src={etisalat} alt="/" />
        <img className="w-full h-full object-cover" src={GLO} alt="/" />
        <img className="w-full h-full object-cover" src={Airtel} alt="/" />
        <img className="w-full h-full " src={Spectranet} alt="/" />
        <img className="w-full h-full " src={Smile} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto bg-[#0096C7] text-white m-4 p-8 shadow-2xl relative'>
        <div className='max-w-[1240px] ml-36 py-16 '>
          <div className='flex flex-rows-2 mt-4 col-span-2 pt-8 md:pt-2'>
            <div className="leading-normal tracking-normal">
              <p className='font-bold text-2xl ml-24'> Get Your Free SMS Analysis</p>
              <p className='font-normal mt-4 ml-3'>Contact Us via any of the below</p>
              <div className='col-span-2 ml-24 mt-4 pt-8 md:pt-2 flex space-x-8 sm:w-[300px] py-4'>
                <a href='#'><FaFacebook /></a>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaTwitter /></a>
                <a href='#'><FaWhatsapp /></a>
                <a href='#'><FaGithub /></a>
              </div>
            </div>
            <div className="mt-10">
              <a href='#' className="mr-6 ml-36">
                <button className="bg-white hover:bg-gray-300 text-black font-semibold rounded-full w-36 h-10 text-center">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;
