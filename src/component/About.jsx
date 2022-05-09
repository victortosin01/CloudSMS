import React from 'react';
import AboutImg from '../assets/Group 95 (2).png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-blue-700 to-cyan-300 md:w-full md:h-screen'>
      <img className='w-full h-full object-cover object-center absolute md:w-full md:mb-12 md:h-full md:object-cover md:object-center md:absolute' src={AboutImg} alt="/" />
      <div className=' text-white relative py-12 pt-36 ml-24'>
        <h2 className='text-3xl pt-8 text-white font-bold'>About VoiceSMS</h2>
        <p className='py-4 text-2xl text-white font-normal justify-between'>VoiceSMS is a pre-recorded call conversation sent <br></br> to a lot of people at once. With VoiceSMS, you can <br></br> send voicecall to numerous people at once without <br></br> having to call each person; you can record your <br></br> conversation; upload the conversation to our <br></br> platform; input recipients' mobile number and <br></br> send to all. After sending to your recipients, you <br></br> will recieve a call from your registered phone <br></br> number(changeable) of all the conversation <br></br> you recorded as though you are calling each <br></br> of the recipients from your phone</p>
        <div className='mt-18'>
          <a href="">
            <button className='mt-5 px-8 py-3 font-semibold border-none bg-white hover:bg-gray-300 text-black mr-4 '>
              Explore more
            </button>
          </a>
            
        </div>
      </div>
    </div>
  );
};
export default About