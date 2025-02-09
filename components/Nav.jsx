'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    const isUserLoggedIn = true;
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
            <Image src='/assets/images/logo.jpg' width={45} height={45} alt='hops logo' className='rounded-full'/>

            <p className='logo_text'>HOPS</p>
        </Link>

        {/* DESKTOP RESPONSIVE / VIEW */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn? 

            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt'
                    className='black_btn'>
                    Create Post
                </Link>

                <button type='button' onClick={signOut} className='outline_btn'>
                    Sign Out
                </button>

                <Link href='/profile'>
                    <Image src='/assets/images/logo.jpg' width={40} height={40} alt='profile picture' className='rounded-full'/>
                </Link>

            </div> 
            :
            <> 
                {
                    providers && 
                     Object.values(providers).map((provider)=>(
                        <button
                            type='button'
                            key={provider.name}
                            onClick={()=>signIn(provider.id)}
                            className='black_btn'
                            >Sign In
                        </button>



                ))}
            </>
            }
        </div>

        {/* Mobile responsive / view */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? 
                <div className='flex'>
                    <Image src='/assets/images/logo.jpg' width={40} height={40} alt='profile picture' 
                    className='rounded-full'
                    onClick={()=> setToggleDropDown ((prev)=> !prev)}
                    />
                    {toggleDropDown && 
                        <div className='dropdown z-50 '>
                            <Link
                             href='/profile'
                             className='dropdown_link'
                             onClick={() => setToggleDropDown (false)}>
                                My Profile
                            </Link>

                            <Link
                             href='/create-prompt'
                             className='dropdown_link'
                             onClick={() => setToggleDropDown (false)}>
                                Create Prompt
                            </Link>

                            <button
                             type='button'
                             onClick={()=>{
                                setToggleDropDown(false);
                                signOut();}}
                             className='mt-5 w-full black_btn'>Sign Out
                            </button>


                        </div>
                    }


                </div> 
                
                : 
                
                <> 
                {
                    providers && 
                     Object.values(providers).map((provider)=>(
                        <button
                            type='button'
                            key={provider.name}
                            onClick={()=>signIn(provider.id)}
                            className='black_btn'
                            >Sign In
                        </button>



                ))}
                </>
            }

        </div>




        
      
    </nav>
  )
};

export default Nav;
