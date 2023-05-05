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
        <title>Hardi-Muhsin | Portfolio</title>
        <link rel="icon" href="assets/Hm.ico" />
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
