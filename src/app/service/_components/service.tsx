'use client'

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import hotel from '/public/hotel.jpg';
import restaurent from '/public/restaurent.jpg';
import gym from '/public/gym.jpg';
import parking from '/public/parking.jpg';
import { useRouter } from "next/navigation";


export function Service() {
  const router = useRouter()

  function handleBooking(){
    router.push('/booking')
  }

  return (
    <>
      <Header/>
      <main>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-950 dark:text-gray-50">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experimente o melhor de tudo
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Descubra nosso restaurante de classe mundial, academia de última geração e serviços de estacionamento convenientes, tudo em um só lugar.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="primary">Explorar serviços</Button>
                <Button variant="secondary" onClick={handleBooking}>Reservar</Button>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height={550}
              src={hotel}
              width={550}
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Restaurant"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              height={550}
              src={restaurent}
              width={550}
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Restaurante</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Saboreie a melhor culinária</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Delicie-se com uma experiência culinária como nenhuma outra em nosso restaurante premiado. Apresentando
                ingredientes de origem local e pratos habilmente elaborados, nosso menu irá deliciar seus sentidos.
              </p>
              <div className="flex items-center gap-4">
                <UtensilsIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <StarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <LeafIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <Button variant="primary">Explorar Menu</Button>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-950 dark:text-gray-50">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Gym</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Eleve seu condicionamento físico</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Desbloqueie todo o seu potencial em nossa academia de última geração. Equipado com a mais recente tecnologia de fitness e
                liderados por treinadores especializados, oferecemos uma experiência de treino transformadora.
              </p>
              <div className="flex items-center gap-4">
                <DumbbellIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <HeartPulseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <TrainTrackIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <Button variant="primary">Entrar</Button>
            </div>
            <Image
              alt="Gym"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height={550}
              src={gym}
              width={550}
            />
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="Parking"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              height={550}
              src={parking}
              width={550}
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Estacionamento</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Soluções convenientes de estacionamento</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Desfrute de estacionamento sem complicações com nossas instalações seguras e acessíveis. Esteja você visitando nosso
                restaurante ou academia, oferecemos ampla vaga de estacionamento e fácil acesso.
              </p>
              <div className="flex items-center gap-4">
                <SquareParkingIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <LockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <AccessibilityIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <Button variant="primary">Saber mais</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

function AccessibilityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function DumbbellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function HeartPulseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}


function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SquareParkingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}


function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TrainTrackIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </svg>
  )
}


function UtensilsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}