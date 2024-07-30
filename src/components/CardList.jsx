import React from 'react';
import Card from './Card';
import { feedback } from '../constants';


const CardList = () => {


  return (
    <div className="flex flex-row items-start bg-[url('/src/assets/bgTest.svg')] w-full">
        <div className='flex flex-row grow justify-between py-8'>
            <div className='flex mx-40 flex-col justify-around leading-10'>
                <div>
                    <p className='font-poppins font-[100] italic text-white text-[33px] block mb-2'>
                        People <br />are <br />saying <br />about us
                    </p>
                    <hr className='w-[40px] mb-2'/>
                    <a href="" className='text-white text-[20px] font-montserrat font-[400] leading-[24px]'>See all <span className='w-[25px] h-[25px] inline-block bg-white rounded-[100%] text-secondary text-center font-bold ml-2'> {">"} </span></a>
                </div>
            </div>
            <div className='flex flex-row'>
                {feedback.map((card, index) => (
                    <Card
                    key={index}
                    title={card.title}
                    content={card.content}
                    isLast={index === feedback.length - 1}
                    name={card.name}
                    img={card.img}
                    />
                ))}
            </div>
            
        </div>
    </div>
  );
};

export default CardList;
