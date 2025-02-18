'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";

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
    <section className="feed">
      <div className="flex gap-12 overflow-x-scroll overflow-y-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Image src='/assets/images/logo.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/agb.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/akwa.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/benin.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/buru.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/ebony.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/lagos.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/owerri.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/udu.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/uyo.png' alt='picture' width={100} height={100}/>
        <Image src='/assets/images/warri.png' alt='picture' width={100} height={100}/>
        

      </div>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
  
      />




    </section>
  )
};

export default Feed;
