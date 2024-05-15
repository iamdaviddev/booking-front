import Link from "next/link"

import { 
  Instagram, 
  Facebook, 
  Twitter, 
} from 'lucide-react';

export function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 lg:py-16 container">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
            >
            <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Sobre</h4>
            <ul className="space-y-2">
                <li>
                    <Link 
                        className="text-gray-300 hover:text-white" 
                        href="/about"
                    >
                        Sobre nós
                    </Link>
                </li>
                <li>
                    <Link 
                        className="text-gray-300 hover:text-white" 
                        href="/gallery"
                    >
                        Galeria
                    </Link>
                </li>
            </ul>
            </div>
            <div>
                <h4 className="text-lg md:text-xl font-bold mb-4">Explore</h4>
                <ul className="space-y-2">
                    <li>
                        <Link 
                            className="text-gray-300 hover:text-white" 
                            href="/booking"
                        >
                            Quartos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-gray-300 hover:text-white"    
                            href="/service"
                        >
                            Serviços
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg md:text-xl font-bold mb-4">Suporte</h4>
                <ul className="space-y-2">
                    <li>
                        <Link className="text-gray-300 hover:text-white" href="#">
                            Centro de Ajuda
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-gray-300 hover:text-white" 
                            href="contacts"
                        >
                            Contactos
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-white" href="#">
                            FAQs
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg md:text-xl font-bold mb-4">Redes Sociais</h4>
                <ul className="space-y-2">
                    <li>
                        <Link className="text-gray-300 hover:text-white" href="#">
                            <Facebook />
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-white" href="#">
                            <Twitter />
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link className="text-gray-300 hover:text-white" href="#">
                            <Instagram/>
                            Instagram
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
       
            <div className="mt-8 md:mt-10 lg:mt-12 text-center">
                <p className="text-gray-400 text-sm">
                    © 2024 yami. Todos direitos reservados.
                </p>
            </div>
        </div>
        </footer>
  )
}