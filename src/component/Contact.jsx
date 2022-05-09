import React from 'react';
import {
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaGoogle,
    FaTwitter,
    FaSkype,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name="register" className='max-w-full'>
      <div className="text-center items-center justify-between">
        <p className="font-semibold text-3xl">Do you need any information</p>
        <p className="text-2xl font-semibold mt-4">Contact us via any of the below</p>
      </div>
      <div className='grid grid-rows-2'>
        <div className='ml-48 grid sm:grid-cols-2 gap-8 py-4 space-x-16'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button classNmae='flex flex-col'>
                <FaWhatsapp size={50}/>
            </button>
            <div className= 'flex flex-col'>
                <h3 className='py-2 flex ml-8 text-2xl'>+1(352) 559 2355 (Whatsapp) <br></br> 08091234508, 08179092255</h3>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <FaFacebook size={50} />
            </button>
            <div>
                <h3 className='py-2 ml-8 text-2xl'>CloudSMS</h3>
            </div>
          </div>
        </div>
        <div className='ml-48 grid sm:grid-cols-2 gap-8 py-4 space-x-16'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='flex flex-col'>
                <FaSkype size={50}/>
            </button>
            <div className= 'flex flex-col'>
                <h3 className='py-2 flex ml-8 text-2xl'>akinmade.CloudWare</h3>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <FaGoogle size={50} />
            </button>
            <div>
                <h3 className='py-2 ml-8 text-2xl'>voice@cloudware.com.ng</h3>
            </div>
          </div>
        </div>
        <div className='ml-48 grid sm:grid-cols-2 gap-8 py-4 space-x-16'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button classNmae='flex flex-col'>
                <FaTwitter size={50}/>
            </button>
            <div className= 'flex flex-col'>
                <h3 className='py-2 flex ml-8 text-2xl'>@CloudSMS</h3>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <FaWhatsapp size={50} />
            </button>
            <div className= 'flex flex-col'>
                <p className='py-1 lg:flex-row items-center text-center ml-8 text-2xl'>Send us a message</p>
            </div>
          </div>
        </div>
        <div className='ml-48 grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='flex flex-col'>
                <FaInstagram size={50}/>
            </button>
            <div className= 'flex flex-col'>
                <h3 className='py-2 flex ml-8 text-2xl'>@cloudsms.ng</h3>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;