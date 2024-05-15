import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function ABout() {
  return (
    <>
      <Header/>
      <section className="w-full py-12 md:py-24 lg:py-32 container">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acme Software Solutions</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Acme Software Solutions is a leading provider of innovative software solutions for businesses of all
                  sizes. Our team of experts is dedicated to delivering cutting-edge technology that helps our clients
                  achieve their goals.
                </p>
              </div>
            </div>
            <Image
              alt="Acme Software Solutions"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
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
              src="/placeholder.svg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Businesses with Innovative Solutions
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Acme Software Solutions, our mission is to empower businesses of all sizes with innovative and
                  cutting-edge software solutions that help them achieve their goals and stay ahead of the competition.
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Integrity, Innovation, and Excellence
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At the heart of Acme Software Solutions are our core values of integrity, innovation, and excellence.
                  These principles guide everything we do, from the way we develop our products to the way we interact
                  with our clients.
                </p>
              </div>
            </div>
            <Image
              alt="Values"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts Behind Acme</h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experienced professionals is dedicated to delivering exceptional software solutions to our
                clients.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-gray-500 dark:text-gray-400">Chief Executive Officer</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="John Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="font-medium">John Smith</div>
                  <div className="text-gray-500 dark:text-gray-400">Chief Technology Officer</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="font-medium">Sarah Lee</div>
                  <div className="text-gray-500 dark:text-gray-400">Chief Operating Officer</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="h-20 w-20">
                  <AvatarImage alt="David Kim" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <div className="font-medium">David Kim</div>
                  <div className="text-gray-500 dark:text-gray-400">Chief Financial Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
