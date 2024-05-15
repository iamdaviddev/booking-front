import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export default function Contact() {
  return (
    <>
      <Header/>
      <main className="mx-auto md:px-6 lg:px-8 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
          <div>
            <h1 className="text-3xl font-bold mb-4">Contacte-nos</h1>
            <p className="text-gray-500 mb-8">
              Tem alguma dúvida ou quer trabalhar juntos? Preencha o formulário abaixo e retornaremos o mais breve possível.
            </p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Seu email" type="email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Mensagem" rows={5} />
              </div>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
          <div className="container">
            <h2 className="text-2xl font-bold mb-4">Localização</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-gray-500">
                  Morro Bento
                  <br />
                  Avenida 21 de Janeiro
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">+244 929 173 874</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500">yami@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <Image
                alt="Map"
                className="w-full rounded-lg"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/300",
                  objectFit: "cover",
                }}
                width="500"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}