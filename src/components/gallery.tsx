import { Button } from "@/components/ui/button"
import Image from "next/image"

import imgD from '/public/imgD.jpg';
import imgE from '/public/imgE.jpg';
import imgF from '/public/imgF.jpg';
import { useRouter } from "next/navigation";


export function Gallery() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/gallery')
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 container">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Nosssa Galeria</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 md:text-lg">Explore nossa impressionante coleção de imagens.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 1"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgD}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 2"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgE}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 3"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgF}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 4"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgD}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 5"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgE}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 6"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgF}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 7"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgD}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Gallery Image 8"
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
              height={400}
              src={imgE}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg" onClick={handleClick}>Ver mais</Button>
        </div>
      </div>
    </section>
  )
}