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
    <section className="feed mx-[2rem] ">
      <div className="flex gap-12 overflow-x-scroll overflow-y-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">

      </div>
      <div>
        <button>About Us</button>
      </div>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
  
      />




    </section>
  )
};

export default Feed;
