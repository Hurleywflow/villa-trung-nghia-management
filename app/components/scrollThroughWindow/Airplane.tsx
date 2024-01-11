import Image from 'next/image';
import React from 'react';

function Airplane() {
  return (
    <div className='relative'>
      <Image
        src='/airplane.png'
        alt='airplane'
        layout='fill'
        sizes='(max-width: 80px) 100vw, 50vw'
        className='absolute scale-[10%] md:scale-[30%]'
      />
    </div>
  );
}

export default Airplane;
