import { useState } from "react";
import { Link, animateScroll as scroll, } from 'react-scroll';
import logoImg from "../assets/logo_xmas.png";
import hamburgerImg from "../assets/icons8-hamburger-menu-50.png";
import closeImg from "../assets/cancel (3).png";


const NavBar = () =>
{
   let [open, setopen] = useState(false)

   return (
      <nav className="flex items-center justify-between py-4">
        <img src={logoImg} alt="logo" className="w-18 ml-7" />
        <img src={open ? `${closeImg}` : `${hamburgerImg}` } className="md:hidden fixed right-5 cursor-pointer z-20 top-6" alt='/' onClick={() => setopen(!open)} />
            <ul className={` text-black backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>  
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-black border-b-2 md:py-2 py-3"> <Link to="home" smooth={true} duration={500}>VoiceSMS</Link> </li>
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2 border-transparent hover:border-black font-Barlow font-normal text-sm md:py-2 py-3 "> <Link to="about" smooth={true} offset={1000} duration={500}>AboutVoiceSMS</Link> </li>
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2 border-transparent hover:border-black font-Barlow font-normal text-sm md:py-2 py-3 "> <Link to="pricing" smooth={true} offset={100} duration={500}>Pricing</Link></li>
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2 border-transparent hover:border-black font-Barlow font-normal text-sm md:py-2 py-3 "> <Link to="platforms" smooth={true} offset={20} duration={500}>Register</Link></li>
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2 border-transparent hover:border-black font-Barlow font-normal text-sm md:py-2 py-3 "> <Link to="register" smooth={true} offset={0} duration={500}>Social Media</Link></li>
              <li className="text-black 2xl:inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2 border-transparent hover:border-black font-Barlow font-normal text-sm md:py-2 py-3 "> <Link to="contact" smooth={true} offset={50} duration={500}>Contact Us</Link></li>
            </ul>
         <div className="hidden md:flex pr-4">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder=" "
              type="text"
              name="search"
            />
          </label>
        </div>
      </nav>
   )
}
export default NavBar;