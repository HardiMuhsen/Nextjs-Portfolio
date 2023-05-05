import Navbar from '../components/navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect } from 'react';
import SplashScreen from '../components/splashscreen';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] =  useState("dark");
  useEffect(() => {
    if(window.matchMedia('(prefers-color-schema: dark)').matches){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add("dark")
    }else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <SplashScreen >
    <main className='dark'>
    <Navbar />
    <Component {...pageProps} />
    </main>
    </SplashScreen>
  )
 

}

export default MyApp
