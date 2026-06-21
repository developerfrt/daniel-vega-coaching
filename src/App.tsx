import { FAQSection } from './components/sections/FAQSection'
import { GiftsSection } from './components/sections/GiftsSection'
import { HeroSection } from './components/sections/HeroSection'
import { PlansSection } from './components/sections/PlansSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { TransformationsSection } from './components/sections/TransformationsSection'
import { AboutSection } from './components/sections/AboutSection'
import { SponsorSection } from './components/sections/SponsorSection'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { StickyWhatsappBar } from './components/layout/StickyWhatsappBar'
import { WheelModal } from './components/modals/WheelModal'
import { useWheelModal } from './hooks/useWheelModal'

function App() {
  const wheelModal = useWheelModal()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlansSection />
        <TransformationsSection />
        <TestimonialsSection />
        <GiftsSection />
        <AboutSection />
        <FAQSection />
        <SponsorSection />
      </main>
      <Footer />
      <StickyWhatsappBar />
      <WheelModal isOpen={wheelModal.isOpen} onClose={wheelModal.close} />
    </>
  )
}

export default App
