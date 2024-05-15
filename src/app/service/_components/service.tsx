import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Link from "next/link"

export function Service() {
  return (
    <>
      <Header/>
      <div className="flex flex-col min-h-[100dvh] container">
        <section className="w-full py-12 md:py-24 lg:py-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unlock Your Business Potential with Our Comprehensive Services
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover how our tailored solutions can transform your business and drive sustainable growth. From
                  strategy to execution, were here to help you succeed.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored Solutions for Your Business</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From strategy to execution, our comprehensive services are designed to help you achieve your business
                  goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Strategic Consulting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Unlock your business potential with our expert strategic consulting services.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Digital Transformation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embrace the digital future and revolutionize your operations.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Marketing & Branding</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Elevate your brand and reach new heights with our marketing expertise.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Operations Optimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your processes and drive efficiency across your organization.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Technology Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leverage cutting-edge technology to power your business transformation.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Change Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Navigate change with confidence and ensure a smooth transition.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}