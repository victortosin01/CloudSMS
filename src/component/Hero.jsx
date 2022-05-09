import React from "react";
import homeImg from "../assets/Group 95.png";


const Hero = ()=> {
  return (
    <div name='about' className="bg-gradient-to-r from-blue-700 to-cyan-300">
        <div className="w-full h-[630px] relative">
            <img className='w-full h-[900px] object-cover absolute object-center md:object-center' alt="/" src={homeImg}/>
            <div className='flex flex-cols-2 md:flex'>     
                <div className="mr-32 mx-auto md:mt-18">
                    <div className='flex flex-wrap lg:ml-20 pt-14 justify-start md:justify-start max-w-xl md:my-36 md:flex flex-row-2'>
                        <h4 className="font-semibold text-4xl md:text-4xl lg:text-4xl text-center md:text-left">Effective and instant. Connect with clients, customers, members, and people in a personalized effective <br></br> way</h4>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-4 flex space-x-8 mr-72 mt-96">
                <a href="#">
                    <button className='h-12 w-36 mt-5 px-8 py-3 font-semibold border-none bg-white hover:bg-gray-300 text-black mr-4'>
                        Buy VoiceSMS Units
                    </button> 
                </a>
                <a href="#">
                    <button className='h-12 w-16 mt-5 px-8 py-3 font-semibold border-none bg-white ring-1 ring-slate-300/5 shadow-lg space-y-3 hover:bg-cyan-300 text-black mr-4'>Login</button>
                </a>
            </div>
        </div>
        
        
        <div name='about' className='w-full bg-white grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 text-center'>
            <div className='border py-36 border-r-2 border-500 border-black' >
                <p className='text-black-300 text-5xl font-bold mt-2'>Fast</p>
            </div>
            <div  className='border py-36 border-r-2 border-500 border-black' >
                <p className='text-black-300 text-5xl font-bold mt-2'>Reliable</p>
            </div>
            <div className='border py-36 border-r-2 border-500 border-black' >
                <p className='text-black-300 text-5xl font-bold mt-2'>Affordable</p>
            </div>
            <div className='border py-36 border-r-2 border-500 border-black' >
                <p className='text-black-300 text-5xl font-bold mt-2'>Secure</p>
            </div>
            <div className='border py-36 border-r-2 border-500 border-black' >
                <p className='text-black-300 text-5xl font-bold mt-2'>Easy</p>
            </div>
        </div>
    </div>
  );
}

export default Hero;