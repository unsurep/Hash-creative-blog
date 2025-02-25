import React from 'react'
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-5 bg-black/80 text-white w-full rounded-t-lg mt-10">
      <div className='flex flex-col items-center justify-center w-full my-8 space-y-5'>
        <h1 className='text-sm md:text-xl font-inter'>Hash Online Publication Services</h1>

        <ul className='md:flex items-center gap-4 text-xs md:text-sm text-gray-400 grid grid-cols-2  '>
          <Link href='/' className='cursor-pointer hover:text-white'>Home</Link>
          <Link href='/about' className='cursor-pointer hover:text-white'>About </Link>
          {/* <Link href='/create-post' className='cursor-pointer hover:text-white'>Create Post</Link> */}
          <Link href='/photoblast' className='cursor-pointer hover:text-white'>Photo-Blast</Link>
          <Link href='/blog' className='cursor-pointer hover:text-white'>Blog Post</Link>
        </ul>

        <div className='flex items-center md:gap-2'>
        <SocialIcon
          url="https://instagram.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="instagram"
          style={{ height: 40, width: 40 }}
          
          
        />

        <SocialIcon
          url="https://facebook.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="facebook"
          style={{ height: 40, width: 40 }}
          
        />

          <SocialIcon
          url="https://snapchat.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="snapchat"
          style={{ height: 40, width: 40 }}
          
          />

          <SocialIcon
          url="https://tiktok.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="tiktok"
          style={{ height: 40, width: 40 }}
          
          />

          <SocialIcon
          url="https://x.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="x"
          style={{ height: 40, width: 40 }}
          
          />

          <SocialIcon
          url="https://youtube.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          network="youtube"
          style={{ height: 40, width: 40 }}
          
          />
        </div>

      </div>


      
      <div className='flex items-center justify-center gap-3 mx-[1rem]'>
        <h4><Image src='/assets/images/me.jpg' height={20} width={20} alt="image" className="rounded-full animate-pulse ring ring-green-500"/></h4>
        <p className="text-[8px] text-gray-500 md:text-xs">Designed & deployed by 1SurePlayer  for HOPS. All rights reserved © 2025.</p>
      </div>
      <p className="text-[8px] text-gray-500 md:text-xs">wedevilleg@gmail.com</p>

    </div>

     
    
  )
}

export default Footer;
