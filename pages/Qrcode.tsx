import React from 'react';
import project  from '../public/assets/QR-code.png';
import Image from 'next/image';
import {RiRadioButtonLine} from 'react-icons/ri';
import Link from 'next/link';

const QrCode = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={project} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Qr Code Generator</h2>
                    <h3>Html / Css / Python / Flask</h3>
                </div>
            </div>
            
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                <p className=''>
                    Project
                </p>
                <h2>Overview</h2>
                <p>
                Qrcode generator website is a website that generate qr codes from links,
                this website goal is To easily open our links through the camera.
                </p>
                <Link href='https://github.com/HardiMuhsen/Qr-Code-Generator-Kurdish-'>
                <button className='px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-pink-700 to-purple-700'>Code</button>
                </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 text-pink-700'>
                <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonLine className='pr-1'/> Html </p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonLine className='pr-1'/> Css </p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonLine className='pr-1'/> Python </p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonLine className='pr-1'/> Flask </p>


                
                        </div>
                    </div>
                </div>
                <Link 
                href='/#projects'>
                <p className='underline cursor-pointer text-pink-700'>Back</p>
                </Link>

            </div>
        </div>
       

    )
}

export default QrCode   