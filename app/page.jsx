'use client';
import Feed from "@/components/Feed";
import { useEffect } from "react";
import { useTypewriter} from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import { GiDoorHandle } from "react-icons/gi";


const Home=()=>{

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Animation triggers only once on scroll
        });
      }, []);

    const[text]= useTypewriter({
        words: ['Discover', 'Read', 'Create', 'Discover & Enjoy'],
        loop: 5,
        typeSpeed: 70,
        deleteSpeed:50,
        delaySpeed:1000
    });



    return(
        <div>
        <section className="w-full flex-center flex-col relative px-[2rem]">
            <h1 data-aos="zoom-in-up" data-aos-duration="2000" className="head_text text-center">{text}
                {/* <br className="max-md:hidden"/> */}
                <br className="" />
                <span className="orange_gradient text-center">Feedbacks from Hashing...</span>
            </h1>

            <p data-aos="zoom-in-up" data-aos-duration="2000" className="desc tect-center">Hash Online Publication Services also known as HOPS is a platform where hashers around the world discover and enjoy feedbacks from various hashing events in Nigeria.</p>


            

            {/* Feed */}
            <Feed/>

        </section>

        <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm7972a9n01r8svk6l022jqqa" className="flex items-center justify-center"></script>
        
        </div>
    )

};

export default Home;