import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/main'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
      
    <div className=''>
      <Head>
        <title>Hardi Muhsen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Hardi Muhsen" />
        <meta name="description" content="Welcome To My Portfolio 🥰" />
        <meta name="author" content="Hardi Muhsen" />
        <meta name="keywords" content="portfolio, web design, graphic design, photography" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="rDs_MCz4pcdB5x_g6fX1zh79XhMxn1iW5Z8a0rND_Yo" />

        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hardi-portfolio.netlify.app/" />
        <meta property="og:title" content="Hardi Muhsen" />
        <meta property="og:description" content="Welcome To My Portfolio 🥰" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

       
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hardi-portfolio.netlify.app/" />
        <meta property="twitter:title" content="Hardi Muhsen" />
        <meta property="twitter:description" content="Welcome To My Portfolio 🥰" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

        <link rel="icon" href="assets/Hm.ico" />
        <link rel="canonical" href="https://hardi-portfolio.netlify.app/" />

      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default Home
