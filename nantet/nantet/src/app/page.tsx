// app/page.tsx
import { About } from "./_components/about"
import { Hero } from "./_components/hero"
import Projects from "./_components/projects"
import { Services } from "./_components/services"
import { Tours } from "./_components/tours"
import { Footer } from "./_components/footer"
import CheckVaa from "./_components/checkVaa"
import FooterDev from "./_components/footer-dev"
import WhatsappWrapper from "./_components/whatsapp-wrapper"
import AppMobile from "./_components/appMobile"
import ParallaxSection from "./_components/parallaxSection"

export default function Home() {
  return (
    <main>
      <Projects />
      <About />
      <Hero />
      <Tours />
      <ParallaxSection />
      <WhatsappWrapper>
        {/* <Services />
        <CheckVaa />
        <AppMobile /> */}
        <Footer />
        <FooterDev />
      </WhatsappWrapper>
    </main>
  )
}