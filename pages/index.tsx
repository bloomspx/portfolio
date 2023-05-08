import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-black-pearl to-dark-azure text-white h-screen
      snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header/>

      {/* Profile */}
      <section id ='profile' className='snap-center'>
        <Profile/>
      </section>
      
      {/* About */}
      
      {/* Experience */}
      
      {/* Skills */}
      
      {/* Projects */}
      
      {/* Contact Me */}
    </div>
  )
}
