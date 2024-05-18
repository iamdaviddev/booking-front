import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer";

import imgB from '/public/imgB.jpg';
import imgC from '/public/imgC.jpg';
import aboutImg from '/public/about.jpg'

export default function ABout() {
  return (
    <>
      <Header/>
      <section className="w-full py-12 md:py-24 lg:py-32 container">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Sobre nós</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">yami</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  yami é uma esplanada que esta vinculado na área de hotelaria e turismo, que faz uso das novas tecnologia no mercado para garantir maior estabilidade para os seus clientes. Nossa equipe de especialistas se dedica a fornecer tecnologia de ponta que ajude nossos clientes
                  alcançar seus objetivos.
                </p>
              </div>
            </div>
            <Image
              alt="Acme Software Solutions"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src={imgB}
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src={imgC}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Nossa missão
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Soluções Inovadoras
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Na yami, nossa missão é proporcionar ambiente estável para todos os nossos clientes com soluções inovadoras e permanecer à frente da concorrência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Nossos Valores</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Integridade, Inovação, e Excelência
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  No coração da yami estão nossos valores fundamentais de integridade, inovação e excelência. Esses princípios norteiam tudo o que fazemos, desde a forma como desenvolvemos nossos produtos até a forma como interagimos com nossos clientes.
                </p>
              </div>
            </div>
            <Image
              alt="Values"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src={aboutImg}
              width="550"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
