import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'; 


type SplashScreenProps = {
  children: React.ReactNode;
};


const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const line = "Welcome To My Portfolio..."
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay:0.5,
        staggerChildren: 0.08
      }
    }
  }
  const letter = {
    hidden: {opacity: 0, y: 50 },
    visible: {
      opacity:1,
      y: 0,
    },
  }
   
 

  return isLoading ? (
    <div className='w-screen h-screen flex justify-center items-center text-pink-700'>
      
      <motion.h1 
       className='text-5xl sm:text-3xl font-bold'
       variants={sentence}
       initial= "hidden"
       animate="visible"
      >
         {line.split("").map((char, index) => {
          return (
          <motion.span key={char + "_" + index} variants={letter}>
          {char}
          </motion.span>
          )
        })}
      </motion.h1>
    </div>
  ) : (
    <>{children}</>
  );
};

export default SplashScreen;
