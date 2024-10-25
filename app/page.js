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
          content="Herzlich Willkommen bei JP Caravans! 
          Wir sind dein Partner im Bereich des autarken Campens und weiterem Zubehör für deinen Wohnwagen, Wohnmobil oder Van in der Region Gifhorn, Wolfsburg und Braunschweig."
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
