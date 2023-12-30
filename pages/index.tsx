import About from '@/components/About'
import BackgroundCirclesLeft from '@/components/BackgroundCirclesLeft'
import BackgroundCirclesRight from '@/components/BackgroundCirclesRight'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {

  return (
    <div className='mainContainer'>
      <Head>
        <title>Pei Xuan | Portfolio</title>
      </Head>

      <Header/>
      <BackgroundCirclesLeft/>
      <BackgroundCirclesRight/>

      <section id ='profile'>
        <Profile/>
      </section>
      
      <section id='about'>
        <About/>
      </section>
      
      <section id='projects'>
        <Projects/> 
      </section>
      
      <section id='skills'>
        <Skills/>
      </section>
      
      <section id='contact'>
        <ContactMe/>
      </section>
    </div>
  )
  
}
