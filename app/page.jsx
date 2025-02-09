'use client';
import Feed from "@/components/Feed";
import React from "react";
import { useTypewriter} from 'react-simple-typewriter'

const Home=()=>{

    const[text]= useTypewriter({
        words: ['Discover', 'Read', 'Create', 'Discover & Enjoy'],
        loop: 5,
        typeSpeed: 70,
        deleteSpeed:50,
        delaySpeed:1000
    });



    return(
        <section className="w-full flex-center flex-col relative">
            <h1 className="head_text text-center">{text}
                {/* <br className="max-md:hidden"/> */}
                <br className="" />
                <span className="orange_gradient text-center">Feedbacks from Hashing...</span>
            </h1>

            <p className="desc tect-center">Hash Online Publication Services also known as HOPS is a platform where hashers world wild discover and enjoy feedbacks from various hashing events held within Nigeria.</p>

            {/* Feed */}
            <Feed/>




            
        </section>
    )

};

export default Home;