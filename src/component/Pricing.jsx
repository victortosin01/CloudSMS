import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

import PricingImg from '../assets/Group 100.png'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] absolute mix-blend-overlay'>
        <img className='w-full h-full object-cover' src={PricingImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-left py-8 text-slate-300'>
          <h3 className='text-5xl font-bold text-white py-8'>Get the right plan here.</h3>
        </div>

        <div className='grid md:grid-cols-3'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='text-3xl font-bold uppercase px-3 py-1 bg-indigo-200 text-veniceblue-900 rounded-2xl'>Starter</span>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Free Test Credit</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />1-50,000 Voice Message 70 Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />50,000-100,000 Voice Message 65 Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Instant Setup</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Units Do Not expire</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Reliable</p>
            </div>
            <a href='#'>
              <button className="bg-sky-700 hover:bg-cyan-600 text-white rounded-full w-36 h-10 text-center">
                Get Started
              </button>
            </a>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='text-3xl font-bold uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl'>Premium</span>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Free Domain Name of Your Choice</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />24/7 Hosting Of your Platform</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Price 55 Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Minimun First Purchase is 30,000 Units</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Price- From 0.49 Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Setup fee is from 15,000 Naira</p>
            </div>
            <a href='#'>
              <button className="bg-sky-700 hover:bg-cyan-600 text-white rounded-full w-36 h-10">
                Get Started
              </button>
            </a>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='text-3xl font-bold uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl'>Enterprise</span>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />1 Million + Voice SMS - 45 Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />10 Million + 42Kobo/sec</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Setup is Free and Instant</p>
            </div>
r            <a href='#'>
              <button className="bg-sky-700 hover:bg-cyan-600 text-white rounded-full w-36 h-10">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;