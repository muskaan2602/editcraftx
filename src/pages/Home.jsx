import Hero from '../sections/Hero'
import Marquee from '../components/Marquee'
import ShowreelSection from '../sections/ShowreelSection'
import Features from '../sections/Features'
import PortfolioPreview from '../sections/PortfolioPreview'
import Industries from '../sections/Industries'
import Pricing from '../sections/Pricing'
import ClientsSection from '../sections/ClientsSection'
import BookingCTA from '../sections/BookingCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ShowreelSection />
      <Features />
      <PortfolioPreview />
      <Industries />
      <Pricing />
      <ClientsSection />
      <BookingCTA />
    </main>
  )
}
