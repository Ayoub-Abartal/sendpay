import React from 'react'
import styles from '../style'
import {herobg} from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
       
        <div className='flex flex-row justify-between items-center w-full '>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[44px] text-[44px] mt-2 '>
              Sending Money is 
              <br className='sm:block hidden' /> {""}
              Easier than before
            </h1>
        </div>
        <div className=' h-[2px] w-16 bg-gray-500 my-3 ml-5' />

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
        </p>

        <div className="flex">
          <Button btnValue="Register" btnColor="bg-purple-600" btnText="text-white" btnBorder="border-borderColor"/>
          <Button btnValue="Learn more." btnColor="bg-white" btnText="text-black" btnBorder="border-borderColor"/>
        </div>

      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={herobg} 
               alt=""
               className='w-[100%] h-[100%] relative ' />
      </div>
    </section>
  )
}

export default Hero