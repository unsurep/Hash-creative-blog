'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    // const { data:session } = useSession();

    // Providers are used to keep track if a user is logged in or out

    const [providers, setProviders]=useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    // write a useEffect function to call the providers

    useEffect(()=>{
        const fetchProviders = async ()=>{
            const response = await getProviders();

            setProviders(response);
        }

        fetchProviders();
    }, [])



  return (
    <nav className='flex-between w-full mb-12 pt-3'>
        {/* logo */}
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.jpg' width={50} height={50} alt='hops logo' className='rounded-full'/>

            <p className='logo_text'>HOPS</p>
        </Link>

        {/* DESKTOP RESPONSIVE / VIEW */}
        <div className='sm:flex hidden'>
            

                
           











        </div>




        
      
    </nav>
  )
};

export default Nav;
