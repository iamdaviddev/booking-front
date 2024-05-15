'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import { Profile } from '../components/avatar'
import { Hotel } from "lucide-react";

export function Header() {
  const router = useRouter()
  const { data: session } = useSession()

  function handleLogin(){
    router.push('/auth')
  }

  function handleSignUp(){
    router.push('/signup')
  }

  return(
    <header className="bg-white shadow-sm dark:bg-gray-900 container">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="/">
            <Hotel/>
            <span className="text-xl font-semibold">yami</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="/">
              Home
            </Link>
            <Link className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="/about">
              Sobre
            </Link>
            <Link className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="/service">
              Serviços
            </Link>
            <Link className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary" href="/contacts">
              Contactos
            </Link>
          </nav>
          {
            session ? (<Profile/>) : (
              <div className="flex items-center gap-4">
                <Button 
                  className="hidden md:inline-flex" 
                  variant="ghost"
                  type="button" onClick={handleLogin}
                >
                  Entrar
                </Button>
                <Button type="button" onClick={handleSignUp}>
                  Criar conta
                </Button>
              </div>
            )
          }
        </div>
      </header>
  )
}

