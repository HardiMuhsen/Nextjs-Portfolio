import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillPersonLinesFill, BsMoonFill} from 'react-icons/bs';
import { useRouter } from "next/router";


const Navbar =() => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#0cf0f3')
    const [linkColor, setLinkColor] = useState('#c2185b')
    const router = useRouter()
    
    useEffect(() => {
        if (
            router.asPath === '/Linktree' || 
            router.asPath === '/Education' || 
            router.asPath === '/JobPortal' || 
            router.asPath === '/Qrcode' 
        )
        {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }else
        {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    }, [router])
    const handleNav = () => {
        setNav(!nav);
    }
    
    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, 
    []);
    

  

    return (
        <div style ={{
            backgroundColor: `${navBg}`
        }}
            
            className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/">
            <Image src="/assets/navLogo.png" alt="/" width="125" height="50" className="cursor-pointer"/>
            </Link>
            <div>
                <ul style={{color: `${linkColor}`}}
                className="hidden md:flex uppercase">
                    <Link href='/'> 
                    <li className="ml-10 text-sm upp
                    hover:border-b border-b-pink-700 active">Home
                    </li> 
                    </Link>

                    <Link href='/#about'>
                    <li className="ml-10 text-sm uppercase
                    hover:border-b border-b-pink-700">About
                    </li> 
                    </Link>

                    <Link href='/#skills'> 
                    <li className="ml-10 text-sm upp
                    hover:border-b border-b-pink-700">Skills
                    </li> 
                    </Link> 
                    
                    <Link href='/#projects'> 
                    <li className="ml-10 text-sm upp
                    hover:border-b border-b-pink-700">Projects
                    </li> 
                    </Link>

                    <Link href='/#contact'> 
                    <li className="ml-10 text-sm upp
                    hover:border-b border-b-pink-700">Contacts
                    </li> 
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                   <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
            <div className={
                nav 
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
            <div>
                <div className="flex w-full items-center justify-between">
                <Link href='/'>
                <Image src="/assets/navLogo.png" width="87" height="35" alt="/" />
                </Link>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-red-600">
                    <AiOutlineClose/>
                </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">Let's Build Something together </p>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <ul className="uppercase">

                    <Link href='/'> 
                    <li onClick= {() => setNav(false)} className="py-4 text-sm">
                    Home
                    </li>
                    </Link>

                    <Link href='/#about'> 
                    <li onClick= {() => setNav(false)} className="py-4 text-sm">
                    About
                    </li>
                    </Link>

                    <Link href='/#skills'> 
                    <li onClick= {() => setNav(false)} className="py-4 text-sm">
                    Skills
                    </li>
                    </Link>

                    <Link href='/#projects'> 
                    <li onClick= {() => setNav(false)} className="py-4 text-sm">
                    Projects
                    </li>
                    </Link>

                    <Link href='/#contact'> 
                    <li onClick= {() => setNav(false)} className="py-4 text-sm">
                    Contact
                    </li>
                    </Link>

                </ul>
                <div className="pt-20 ">
                <p className="uppercase tracking-widest text-[#C2185b]">Let's Connect</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                </div>
               
                </div>
                </div>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Navbar