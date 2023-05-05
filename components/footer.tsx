import Link from "next/link";
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";



const Footer = () => {
    return (
       
        <footer className="fixed inset-x-0 bottom-0 mt-0 mb-auto py-6 text-center text- font-sm bg-gray-900">
            <div className="flex justify-center mt-4 space-x-10 text-white sm:mt-0">
                <Link href='https://web.facebook.com/people/Hardi-Muhsen/pfbid02JFufkUhdiwo5Hig5FQqcecEL8t6Fei8689EYDQ4FZdoiRCD3mjqt7Xqdc9tjfW9Ql/?mibextid=ZbWKwL'>
                <BsFacebook className="w-5 h-5 hover:text-blue-600"/>
                </Link>
                <Link href='https://www.linkedin.com/in/hardi-muhsen-5823b924a'>
                <BsLinkedin className="w-5 h-5 hover:text-blue-500"/>
                </Link>
                <Link href='https://github.com/HardiMuhsen'>
                <BsGithub  className="w-5 h-5 hover:text-gray-400"/>
                </Link>
                <Link href='https://www.youtube.com/channel/UCglN_d3KHPwT6mB9pxAsebg'>
                <BsYoutube className="w-5 h-5 hover:text-red-500"/>
                </Link>
            </div>
            <div className="flex justify-center items-center py-2"> 
                  <span className="text-pink-700 font-bold text-lg mr-2">Hardi Muhsen</span>
                  <span className="text-white text-md">&copy; {new Date().getFullYear()} All Right Reserved</span>
                  </div>
            
            
        </footer>
        )


}

export default Footer