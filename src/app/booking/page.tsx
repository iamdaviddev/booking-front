import { Button } from "@/components/ui/button"
import { 
  PopoverTrigger, 
  PopoverContent, 
  Popover 
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"

import { 
  SelectValue, 
  SelectTrigger, 
  SelectItem, 
  SelectContent, 
  Select 
} from "@/components/ui/select"

import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function Booking() {
  return (
    <>
      <Header/>

      <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10 container">
        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 lg:p-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Book Your Stay</h1>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="check-in">
                Check-in
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full flex items-center justify-between" variant="outline">
                    <span>Select date</span>
                    <CalendarDaysIcon className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full max-w-md">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="check-out">
                Check-out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full flex items-center justify-between" variant="outline">
                    <span>Select date</span>
                    <CalendarDaysIcon className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full max-w-md">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="guests">
                Guests
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select guests" />
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
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="room-type">
                Room Type
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Room</SelectItem>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Button className="w-full" type="submit">
                Check Availability
              </Button>
            </div>
          </form>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Image
                alt="Room Image"
                className="rounded-t-xl object-cover w-full h-48"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard Room</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Cozy and comfortable room with a queen-size bed.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$150/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Room Image"
                className="rounded-t-xl object-cover w-full h-48"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Deluxe Room</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Spacious room with a king-size bed and a private balcony.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$200/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Room Image"
                className="rounded-t-xl object-cover w-full h-48"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Suite</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Luxurious suite with a separate living room and a jacuzzi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$300/night</span>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer/>
    </>
  )
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

