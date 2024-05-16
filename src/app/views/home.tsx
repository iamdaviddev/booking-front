'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import { 
  PopoverContent, 
  PopoverTrigger, 
  Popover 
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import { 
    SelectValue, 
    SelectTrigger, 
    SelectItem, 
    SelectContent, 
    Select 
} from "@/components/ui/select";

import { CardContent, Card } from "@/components/ui/card"

import { 
  Instagram, 
  Bath, 
  Dumbbell, 
  Facebook, 
  Menu, 
  ParkingSquare, 
  Twitter, 
  Wallet, 
  Wifi 
} from 'lucide-react';

import imgA from '/public/imgA.jpg';
import imgB from '/public/imgB.jpg';
import imgC from '/public/imgC.jpg';

import bannerImg from '/public/banne.jpg';
import roomImg from '/public/room.jpg';
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { RoomService } from "@/services/room-service";
import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { useFetch } from "@/hooks/useFetch";
import { authContext } from "@/providers/SessionProvider";

export function HomeView() {
    const { rooms } = useContext(authContext)  
    return (
      <>
        <Header/>
  
        <main>
          <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 container">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Experimente coisas novas todo momento</h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Encontre o quarto dos sonhos aqui.
                  </p>
                  <form className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 md:p-6 flex items-center gap-4">
                    <div className="flex-1">
                      <Label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1"
                        htmlFor="destination"
                      >
                        Checkin
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="w-full flex items-center justify-between" variant="outline">
                            <span>Select dates</span>
                            <CalendarIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-4">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex-1">
                      <Label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1" htmlFor="dates">
                        Checkout
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="w-full flex items-center justify-between" variant="outline">
                            <span>Select dates</span>
                            <CalendarIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-4">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex-1">
                      <Label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1" htmlFor="guests">
                        Guests
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="1 guest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 guest</SelectItem>
                          <SelectItem value="2">2 guests</SelectItem>
                          <SelectItem value="3">3 guests</SelectItem>
                          <SelectItem value="4">4 guests</SelectItem>
                          <SelectItem value="5">5 guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="flex-shrink-0" type="submit">
                      Search
                    </Button>
                  </form>
                </div>
                <div className="hidden md:block">
                  <Image
                    alt="Hotel booking"
                    className="rounded-lg"
                    height={400}
                    src={bannerImg}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={800}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20 container">
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Quartos em alta</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Descobre os novos melhores quartos</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {rooms?.map(((r) => (
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <Link className="block" href="#">
                      <Image
                        alt="Hotel Image"
                        className="rounded-t-lg w-full h-48 object-cover"
                        height={300}
                        src={imgA}
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width={400}
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{r?.name}</h3>
                        <div className="flex items-center mb-2">
                          <StarIcon className="w-5 h-5 text-yellow-500" />
                          <span className="ml-1 text-gray-600 dark:text-gray-400">4.8</span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">(128 reviews)</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Enjoy a comfortable stay in the heart of the city.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-semibold">KZ 60.000/Noite</span>
                          <Button variant="outline">Reservar</Button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                )))}
              </div>
            </div>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 container">
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Explore by Location</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Find hotels in your desired destination</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link className="block" href="#">
                  <Image
                    alt="New York"
                    className="rounded-lg w-full h-40 object-cover"
                    height={200}
                    src={roomImg}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <h3 className="mt-2 text-lg font-semibold">New York</h3>
                </Link>
                <Link className="block" href="#">
                  <Image
                    alt="Paris"
                    className="rounded-lg w-full h-40 object-cover"
                    height={200}
                    src={roomImg}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <h3 className="mt-2 text-lg font-semibold">Paris</h3>
                </Link>
                <Link className="block" href="#">
                  <Image
                    alt="London"
                    className="rounded-lg w-full h-40 object-cover"
                    height={200}
                    src={roomImg}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <h3 className="mt-2 text-lg font-semibold">London</h3>
                </Link>
                <Link className="block" href="#">
                  <Image
                    alt="Tokyo"
                    className="rounded-lg w-full h-40 object-cover"
                    height={200}
                    src={roomImg}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <h3 className="mt-2 text-lg font-semibold">Tokyo</h3>
                </Link>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20 container">
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Serviços</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Os melhores serviços</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <Wifi/>
                    <h3 className="text-lg font-semibold">Wifi</h3>
                  </div>
                </Link>
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <Wallet/>
                    <h3 className="text-lg font-semibold">Piscina</h3>
                  </div>
                </Link>
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <ParkingSquare/>
                    <h3 className="text-lg font-semibold">Parque</h3>
                  </div>
                </Link>
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <Bath/>
                    <h3 className="text-lg font-semibold">Spa</h3>
                  </div>
                </Link>
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <Dumbbell/>
                    <h3 className="text-lg font-semibold">Ginásio</h3>
                  </div>
                </Link>
                <Link className="block text-center" href="#">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                    <Menu/>
                    <h3 className="text-lg font-semibold">Restaurante</h3>
                  </div>
                </Link>
              </div>
            </div>
          </section>
  
          <Gallery/>
  
        </main>
        
        <Footer/>
    </>
    )
}

function CalendarIcon(props: any) {
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
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
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