"use client"

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";



const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza de orelhas e tosa personalizada (Higienica ou estilizada).",
        duration: "1h",
        price: "R$ 50",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre banho e tosa e gostaria de mais informações.',
    },
    {
        title: "Consulta Veterinaria",
        description: "Oferece atendimento clínico básico e especializado para cuidar da saúde so seu animal. Inclui diagnósticos de doenças, aplicação de vacinas obrigatórias",
        duration: "1h",
        price: "R$ 45",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Conculta Veterinária e gostaria de mais informações.',
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clinicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
        duration: "2h",
        price: "R$ 80",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Taxi Pet e gostaria de mais informações.',
    },
    {
        title: "Hotel para Pet",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros e confortaveis.",
        duration: "1h",
        price: "R$ 60",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para Pets e gostaria de mais informações.',
    },
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)" : { slidesToScroll: 3 }
        }
       })

       function scrollPrev() {
        emblaApi?.scrollPrev();
      }

      function scrollNext() {
        emblaApi?.scrollNext();
      }


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">               
                 <h2 className="text-4xl font-bold mb-12">Serviços</h2>         

                 <div className="relative">

                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 '>
                                    <article className='bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-4'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>
                                            <div>
                                                <a target="_blank"
                                                href="#"
                                                className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                                                >
                                                    <WhatsappLogo className='w-5 h-5'/>
                                                    Entrar em contato
                                                    
                                                </a>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    

                <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                    <ChevronLeft
                        onClick={scrollPrev}
                        className='w-6 h-6 text-gray-600 '                          
                    />
                   
                </button>
                <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                    <ChevronRight
                        className='w-6 h-6 text-gray-600' 
                        onClick={scrollNext} 
                    />
                   
                </button>

                 </div>       
            </div>
            
        </section>
    )
}