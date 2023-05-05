import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import ReactTypical from "react-typical";


interface ReactTypicalProps {
    className?: string;
    steps: (string | number)[];
    loop?: number;
    wrapper?: string;
  }
  
  
const Main = () => {
    return (
        <div id ="home" className='w-full h-screen text-center dark'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>
                Hi, I&#39;m <span className="text-pink-700">Hardi
               </span>
                </h1>

                <h2 className='py-2 text-gray-700'>
                <ReactTypical 
                steps = {[
                    'An Frontend Web Developer',
                  1000,
                  'Designs Cool Websites',
                  1000,
                  'And Develops Web Apps',
                  1000,
                ]}
                loop = {Infinity}
                wrapper = 'p'
                />
              
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                   i'm a front-end web developer specializing in building (and occasional designing) exceptional
                   digital experiences, Currently, I'm focused on building responsive front-end web applications 
                   while learning back-end technologies. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <Link
                    href='https://www.linkedin.com/in/hardi-muhsen-5823b924a'
                    target='_blank'
                    rel='noreferrer'
                >

                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-300">
                <FaLinkedinIn />
                </div>
                </Link>
                <Link
                    href='https://github.com/HardiMuhsen'
                    target='_blank'
                    rel='noreferrer'
                >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-300">
                <FaGithub />
                </div>
                </Link>
                <Link href='/#contact'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-300">
                        <AiOutlineMail />
                </div>
                </Link>
                <Link href='resume.pdf'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-pink-600 ease-in duration-300">
                <BsFillPersonLinesFill />
                </div>
                </Link>
                
                </div>
                </div>
            </div>
        </div>
    )
}
export default Main
