import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-black-pearl to-dark-azure text-white h-screen
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-melon/80'>
      <Head>
        <title>Portfolio | @bloomspx</title>

      </Head>

      <Header/>

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
