import React, { useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import aboutImg from '../public/assets/about.jpg';

const About = () => {
   useEffect(() => {
    animateAboutSection();
   }, []);

    const animateAboutSection = () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const aboutTitle = document.querySelector("#about h2");
    const aboutParagraphs = document.querySelectorAll("#about p");
  
    gsap.set(aboutTitle, { autoAlpha: 0, x: -100 });
    gsap.set(aboutParagraphs, { autoAlpha: 0, x: -100 });
  
    ScrollTrigger.batch(aboutParagraphs, {
      onEnter: batch =>
        gsap.to(batch, {
          autoAlpha: 1,
          x: 0,
          stagger: 0.2,
          overwrite: true,
        }),
      start: "top 80%",
    });
  
    ScrollTrigger.batch(aboutTitle, {
      onEnter: batch =>
        gsap.to(batch, {
          autoAlpha: 1,
          x: 0,
          overwrite: true,
        }),
      start: "top 80%",
    });
  };

    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#C2185B]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">//Im Jr.Front-end developer</p>
                    <p className="py-2 text-gray-600">
                    I am a frontend developer. I love creating beautiful and innovative user interfaces that make people's lives easier.
                    I'm constantly trying to learn new things and expand my skills so I can create good user experiences possible. I believe that art should be accessible to everyone, and that it's important to use your skills to make the world a better place.
                    </p>
                   
                    <Link href='/#projects'>
                    <p className="py-2 text-pink-700 underline cursor-pointer ">Check Out some of my Projects.</p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={aboutImg} alt='/'  />
                </div>
            </div>
        </div>
    )
}

export default About