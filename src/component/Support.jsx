import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'
import "./Support.css";

const Support = () =>{
  return (
    <div name="contact" className='w-full bg-[#096888]'>
      <div className='px-12 py-12'>
        <div className='max-w-[800px] mx-auto bg-white text-black m-4 p-8 shadow-2xl relative'>
          <div className='text-left py-8 text-slate-300'>
            <h3 className='text-2xl font-bold text-black py-8'>If you are interested or have any questions, send us a message</h3>
          </div>
          <div className="container">
            <div className="div">
              
            </div>
          </div>
          <div class="input__box" className="flex">
            <form>
              <div>
                <label className="font-semibold text-[14]"> Your Name</label>
                <input type="text" className="font-bold" placeholder=""></input>
              </div>
              <div>
                <label className="font-semibold text-[14]"> Phone</label>
                <input type="text" className="contac" placeholder=""></input>
              </div>
            </form>
            <form className="ml-20">
              <div>
                <label className="font-semibold text-[14]"> Email</label>
                <input type="text" className="font-bold" placeholder=""></input>
              </div>
              <div>
                <label className="font-semibold text-[14]"> Company Name</label>
                <input type="text" className="contac" placeholder=""></input>
              </div>
            </form>
          </div>
          <form>
              <div className="w-1/2">
                <label className="font-semibold text-[14]"> Message</label>
                <textarea name="message" id="message" placeholder=""></textarea>
              </div>
            </form>
          <a href='#' className="mr-4 absolute bottom-6 right-0">
            <button className="bg-sky-700 hover:bg-cyan-600 text-white rounded-full w-36 h-10 text-center">
              Send Message
            </button>
          </a>
        </div>
      </div>
      <div name='footer' className='max-w-full mx-auto py-16 px-4 text-gray-300'>
        <div className='ml-64 flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaInstagram /></a>
          <a href='#'><FaTwitter /></a>
          <a href='#'><FaTwitch /></a>
          <a href='#'><FaGithub /></a>    
        </div>
    </div>
  </div>
  );
}

export default Support;
