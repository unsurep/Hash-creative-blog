'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import {motion} from 'motion/react';
import { IoHomeSharp } from "react-icons/io5";



const Nav = () => {
    // const isUserLoggedIn = true;
    const { data:session } = useSession();

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
    <nav className='flex-between w-full mb-12 pt-5'>
        {/* logo */}
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.jpg' width={45} height={45} alt='hops logo' className='rounded-full'/>

            <p className='logo_text flex items-center justify-center gap-2'>HOPS <IoHomeSharp className='text-lg'/></p>
        </Link>


        

        {/* DESKTOP RESPONSIVE / VIEW */}
        <div className='sm:flex hidden'>
            {/* isUserLoggedIn? */}
            {session?. user? 

            <div className='flex gap-3 md:gap-5'>
                <Link href='/create-prompt' >
                    <motion.div
                    className='black_btn'
                    initial={{
                        y:-500,
                        Opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        y:0,
                        opacity:1,
                        scale:1
                    }}
                    transition={{duration:0.8}}
                    >Create Post</motion.div>
                </Link>


                <Link href={'/photoblast'} >
                    <motion.div 
                    className='black_btn'
                    initial={{
                        y:-500,
                        opacity:0,
                        scale:0.5,
                    }}
                    animate={{
                        y:0,
                        opacity:1,
                        scale:1
                    }}
                    transition={{duration:1.2}}
                    >Photo-Blast</motion.div> 
                </Link>

                <motion.div
                    initial={{
                        y:-500,
                        opacity:0,
                        scale:0.5
                    }}
                    animate={{
                        y:0,
                        opacity:1,
                        scale:1
                    }}
                    transition={{duration:1.8}}
                    >
                    <button type='button' onClick={signOut} className='outline_btn'>
                        Sign Out
                    </button>
                </motion.div>

            
                <Link href='/profil'>
                    <Image src={session?.user.image} width={40} height={40} alt='profile picture' className='rounded-full'/>
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
            {/* isUserLoggedIn */}
            {session?.user ? 
                <div className='flex'>
                    <Image src={session?.user.image} width={40} height={40} alt='profile_picture' 
                    className='rounded-full'
                    onClick={()=> setToggleDropDown ((prev)=> !prev)}
                    />
                    {toggleDropDown && 
                        <div className='dropdown z-50 '>
                            {/* <Link
                             href='/profile'
                             className='dropdown_link'
                             onClick={() => setToggleDropDown (false)}>
                                My Profile
                            </Link> */}

                            <Link
                             href='/create-prompt'
                             className='dropdown_link'
                             onClick={() => setToggleDropDown (false)}>
                                Create Prompt
                            </Link>

                            <Link
                             href='/photoblast'
                             className='dropdown_link'
                             onClick={() => setToggleDropDown (false)}>
                                Photo Blast
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
