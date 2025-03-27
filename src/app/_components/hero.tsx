import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import Image from "next/image";
import catImg from "../../../public/cat-hero.png";

export function Hero() {
    return (
       <section className="bg-[#E84C3D] text-white relative overflow-hidden">

        <div>
            <Image 
             src={dogImg}
             alt="dog fundo"
             fill
             sizes="100vw"
             priority
             className="object-cover opacity-60 lg:hidden md:hidden"
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden lg:hidden">

            </div>
        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative ">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div className="space-y-6">
                    <h1 
                    className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10"
                    data-aos="fade-down"
                    >
                        Seu pet merece cuidado, carinho e atenção especial.
                    </h1>
                    <p className="lg:text-lg" data-aos="fade-up">
                        Oferecemos os melhores serviços para garantir o bem-estar e a fecidade do seiu amigo de quatro patas.
                    </p>
                    
                        <a target="_blank" href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                    
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                        </p>
                        <div className="flex mt-4">
                            <div data-aos="fade-left" className="w-32 hidden md:block lg:block">
                                <Image 
                                src={catImg}
                                alt="cat"
                                quality={100}
                                className="object-fill"
                               
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-full relative">
                    <Image 
                    src={dogImg} 
                    alt="dog" 
                    className="object-contain"
                    fill 
                    sizes="(max-width: 768px) 0vm, 50vw"
                    quality={100}
                    priority
                    />
                </div>
            </article>
        </div>
       </section>
    )    
}