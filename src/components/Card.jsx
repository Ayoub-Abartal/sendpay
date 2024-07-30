import React from 'react';

const Card = ({name, title, content, isLast, img }) => {
  return (
    <div
      className={`relative w-52 m-2 flex flex-col justify-between mt-5 p-5 right-[-50px] bg-white shadow-lg rounded-lg transition-transform ${
        isLast ? 'fixed right-[-50px] transform' : ''
      }`}
    >
      <p className="text-gray-600 font-[20px] italic w-4/5">{content}</p>

      <div className='flex flex-row mt-5'>
        <img src={img} alt={name} className='w-[48px] h-[48px] mr-4 rounded-full' />
        <div className='flex flex-col'>
            <h4>{title}</h4>
            <p className='text-testemonials'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;