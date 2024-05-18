import Image from "next/image";
import aboutImg from '/public/about.jpg'
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function AboutUs(){
  const router = useRouter()

  function handleAbout(){
    router.push('/about')
  }

  return(
    <section className="">
      <div className="">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="">
            <h2 className="text-xl font-bold">yami</h2>
            <p className="text-gray-500 dark:text-gray-400 text-justify mt-4">
              Donec ut leo non tortor ultricies bibendum a nec mauris. In accumsan ex odio, nec pulvinar sapien congue sed. Suspendisse potenti. Aliquam quis est et nunc fermentum tempus. Nulla et varius nulla, nec laoreet nulla. Sed viverra magna id lectus sollicitudin volutpat. In porta vestibulum ante, vitae feugiat ante pulvinar ac. Phasellus sagittis maximus justo. Vestibulum molestie urna ultricies justo sodales, in laoreet lacus sollicitudin. Curabitur molestie finibus odio, sed vehicula purus fringilla nec. Etiam et fringilla enim.

              Fusce purus purus, pellentesque id lectus nec, pellentesque fermentum orci. Nulla suscipit elit in ipsum ultrices maximus. Etiam dictum posuere tempus. Aenean non porttitor turpis, a consectetur est. Mauris magna eros, scelerisque id turpis a, consectetur pharetra metus.
            </p>
            <Button className="mt-6" onClick={handleAbout}>Ver mais</Button>
          </div>
          <div className="">
            <Image src={aboutImg} alt="aboutus"/>
          </div>
        </div>
      </div>
    </section>
  )
}