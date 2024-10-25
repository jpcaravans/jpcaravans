import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
        <meta
          name="google-site-verification"
          content="F1hmPNsQbG0T5w5diUh6oWUubUy03V34bWcfUc0_7is"
        />
        <title>JP Caravans dein Profi für Nachrüstungen von Movern Solaranlagen und mehr</title>
      </Head>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      </div>
      <Footer />
      
    </main>
    </>
  )
}
