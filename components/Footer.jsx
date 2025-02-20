import React from 'react'
import Image from 'next/image';


const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-5">

      <div className='py-5'>
        <Image src='/assets/images/dc.png' width={1000} height={1000} alt='image' className='hvr-skew'/>
      </div>




      <div className='flex items-center justify-center gap-3'>
        <h4><Image src='/assets/images/me.jpg' height={27} width={27} alt="image" className="rounded-full animate-pulse ring ring-green-500"/></h4>
        <p className="text-[8px] text-gray-500 md:text-sm">Designed & deployed by 1SurePlayer  for HOPS. All rights reserved © 2025.</p>
      </div>
      <p className="text-[8px] text-gray-500 md:text-sm">wedevilleg@gmail.com</p>
    </div>
  )
}

export default Footer;
