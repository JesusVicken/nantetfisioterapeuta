import Image from "next/image"
import nantet from "../../../public/nantet.about.jpg"
import cpp2 from "../../../public/logo2.jpg"
import { Check } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-white py-16 text-black">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bloco de Imagens */}
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={nantet}
                                alt="Carolina Nantet - Pilates e Fisioterapia"
                                fill
                                quality={100}
                                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-2xl overflow-hidden shadow-xl bg-white hidden md:block">
                            <Image
                                src={cpp2}
                                alt="Logo"
                                fill
                                quality={100}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Bloco de Texto */}
                    <div className="space-y-6 mt-10 lg:mt-0" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-gray-900">SOBRE MIM</h2>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Olá! Eu sou a <strong>Carolina Nantet</strong>, fisioterapeuta especialista em dor crônica, performance atlética e condicionamento físico.
                            Minha missão é ajudar pessoas a viverem sem dor, alcançando saúde, qualidade de vida e evolução constante através do movimento.
                        </p>

                        {/* Formação */}
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-gray-900">Formação Acadêmica e Especializações:</p>
                            <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Graduada em Fisioterapia pela Universidade Paulista de Brasília</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Residente em Fisioterapia Neurofuncional pela Universidade de Brasília</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Pós-graduada em Reabilitação Cardiopulmonar pela Universidade Paulista de Brasília</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Pós-graduada em Fisioterapia Traumato-Ortopédica e Desportiva pela CEAF</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Especialista em Dry Needling e Terapias Anti-dor pelo Instituto CEFISA</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Instrutora de Pilates há 9 anos</li>
                            </ul>
                        </div>

                        {/* Experiência Profissional */}
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-gray-900">Experiência Profissional:</p>
                            <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Fisioterapeuta do Tribunal Superior Eleitoral</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Atende pessoas com queixas de dores crônicas e agudas</li>
                                <li className="flex items-center gap-2"><Check className="text-green-600" /> Atua levando informações sobre o estudo da dor e promovendo qualidade de vida</li>
                            </ul>
                        </div>

                        <p className="text-gray-700">
                            Quer saber mais ou agendar sua <strong>aula de pilates</strong>? Me chama no WhatsApp que vou te ajudar!
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                target="_blank"
                                href={`https://wa.me/556182795960?text=Olá Carolina! Gostaria de agendar uma aula experimental personalizada.`}
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md hover:bg-green-700 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Contato comigo
                            </a>

                            <a
                                target="_blank"
                                href={`https://wa.me/556182795960?text=Olá Carolina! Quero entrar no grupo de treinos ou saber mais sobre seu trabalho.`}
                                className="flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Grupo de Treinos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
