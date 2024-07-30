import React from 'react'

import { howItWorksInfo } from '../constants'

const HowItWorks = () => {
  return (
    <div className='flex flex-col text-center'>
        <h1 className='font-bold text-[44px]'>How it works</h1>
        <div className=' h-[2px] w-16 bg-gray-500 my-3 mx-auto' />
        <p className='mb-10' >Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Donec porttitor.</p>
        <div className='flex flex-row gap-12 mx-auto  mb-10'>
            {howItWorksInfo.map((info, index) =>(
                <div key={index} className='flex flex-col text-center w-60'>
                    <img src={info.img} className='w-[207px] h-[207px] rounded-[100%] block mx-auto mb-4' alt="" />
                    <h3 className='font-bold text-[16px] mb-3'>{info.title}</h3>
                    <p className='text-[12px] font-poppins'>{info.content}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HowItWorks