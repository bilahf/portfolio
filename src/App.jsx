import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/about/AboutSection'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ThankYou from './components/ThankYou'

/**
 * Struktur halaman (satu halaman, navigasi memakai anchor #section):
 * Navbar -> Home -> About -> Portfolio -> Contact -> Thank You
 */
export default function App() {
  return (
    <LanguageProvider>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <Portfolio />
          <Contact />
          <ThankYou />
        </main>
      </div>
    </LanguageProvider>
  )
}
