import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import logoImg from "../assets/logo_xmas.png";

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4 '>
        <div className='sm:flex text-center justify-between items-center'>
          <img src={logoImg} alt="logo" className="w-18 ml-7" />
        </div>
        <div className='flex justify-between mt-4'>
          <ul className='lg:flex space-x-16'>
            <li className="ml-10"><a href="#">About VoiceSMS</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;