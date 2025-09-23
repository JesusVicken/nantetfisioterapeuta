'use client'

import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import sunTech from '../../../public/sun.jpg'


gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'Sun Tech', logo: sunTech }
]

export function Footer() {
  const whatsappNumber = '556196780739'
  const whatsappMessage =
    'Olá Carolina! Gostaria de agendar uma aula de Pilates!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const partnersRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Anima os parceiros
    if (partnersRef.current) {
      const partnerCards = gsap.utils.toArray('.partner-card', partnersRef.current)
      gsap.fromTo(
        partnerCards,
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 90%',
          },
        }
      )
    }

    // Anima as seções do footer
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll('.footer-section')
      gsap.fromTo(
        sections,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: 'top 85%',
          },
        }
      )
    }

    // Anima o mapa
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { autoAlpha: 0, scale: 0.95 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 90%',
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* PARCEIROS */}
        <div
          className="border-b border-white/20 pb-10 mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          ref={partnersRef}
        >
          <h4 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Meus Parceiros
          </h4>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-card bg-white p-3 rounded-xl flex items-center justify-center shadow-md w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] opacity-0 scale-90"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill={false}
                  className="object-contain max-w-full max-h-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <footer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm"
          ref={sectionsRef}
        >
          {/* SOBRE */}
          <div className="footer-section opacity-0" data-animate-section>
            <h3 className="text-2xl font-semibold mb-3">Carolina Nantet - Fisioterapeuta</h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Transformando vidas por meio de aulas de Pilates, treinos personalizados e práticas de bem-estar que promovem mobilidade, força e consciência corporal.
            </p>
            <a
              href={whatsappLink}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md font-semibold text-sm transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={20} weight="fill" />
              Agende sua aula
            </a>
          </div>

          {/* CONTATOS */}
          <div className="footer-section opacity-0" data-animate-section>
            <h3 className="text-2xl font-semibold mb-3">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +55 61 9678-0739</li>
              <li>📍 Local: CLS 304 Bloco C, Asa Norte, Brasília - DF</li>
              <li>⏰ Horários sob agendamento, entre em contato para verificar disponibilidade</li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div className="footer-section opacity-0" data-animate-section>
            <h3 className="text-2xl font-semibold mb-3">Redes Sociais</h3>
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.facebook.com/cristianodepireux.7?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
              >
                <FacebookLogo size={32} weight="fill" className="text-[#1877F2]" />
              </a>
              <a
                href="https://www.instagram.com/cristianodepireux/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
              >
                <InstagramLogo size={32} weight="fill" className="text-[#E1306C]" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
              >
                <YoutubeLogo size={32} weight="fill" className="text-[#FF0000]" />
              </a>
              <a
                href="https://www.linkedin.com/in/cristiano-depireux-82380b372/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
              >
                <LinkedinLogo size={32} weight="fill" className="text-[#0077B5]" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* MAPA */}
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] border-t border-white/10 opacity-0"
        ref={mapRef}
      >
        <iframe
          title="Localização Carolina Nantet - Pilates"
          src="https://www.google.com/maps?q=CLS+304+Bloco+C,+Asa+Norte,+Brasília+-+DF&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
