'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";
import Link from "next/link";

const PromptCardList = ({ data, handleTagClick }) =>{
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post)=> (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            />
        ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText]= useState('');
  const [posts, setPosts] = useState ([]);



  const handleSearchChange=(e)=>{


  }



  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch ('/api/prompt');
      const data= await response.json();

      setPosts(data);
    }
    fetchPosts();

  }, []);



  return (
    <section className="feed mx-[2rem] ">
      <div className="flex gap-12 overflow-x-scroll overflow-y-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">

      </div>

      {/* buttons */}

      <div className="flex gap-10">
      <Link href={'/about'} data-aos="zoom-in-up" data-aos-duration="2000">
        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 shake animate-bounce ">
            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-600 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-700 group-hover:-rotate-180 ease"></span>
            <span className="relative md:text-lg text-sm">About Us</span>
            </span>
            <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
            ></span>
        </button>
      </Link>

      <Link href={'/blog'} data-aos="zoom-in-up" data-aos-duration="2000">
        <button type="submit" className="relative md:inline-block text-lg group mt-5 lg:mt-0 shake animate-bounce hidden">
            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-600 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-700 group-hover:-rotate-180 ease"></span>
            <span className="relative md:text-lg text-sm">Blog Post</span>
            </span>
            <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-yellow-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
            ></span>
        </button>
      </Link>
      </div>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
  
      />

      <div className='py-5 w-full'>
        <Image src='/assets/images/dc.png' width={1000} height={1000} alt='image' className='hvr-skew w-full'/>
      </div>
      




    </section>
  )
};

export default Feed;
