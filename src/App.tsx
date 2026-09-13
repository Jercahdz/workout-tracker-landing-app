import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AISection } from './components/AISection'
import { Screenshots } from './components/Screenshots'
import { DownloadSection } from './components/Download'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg text-text">
        <Header />
        <Hero />
        <Features />
        <AISection />
        <Screenshots />
        <DownloadSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App