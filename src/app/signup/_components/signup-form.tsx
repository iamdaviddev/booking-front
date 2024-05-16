'use client'

import { AuthService, type signUpDto } from "@/services/auth-service";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

export function SignUp() {
  const { register, handleSubmit, reset } = useForm()

  const router = useRouter()
  
  async function handleSignIn(data: any) {
    try{
      const result = await AuthService.signUp(data)
      
      if(result){
        toast.success("Conta criada com sucesso!")
        reset()
      }
    }catch(err){
      toast.warning("UPS!! Erro inesperado!")
    }
  }

  return (
    <> 
      <div className="flex h-screen bg-gray-200">
        <div className="m-auto bg-white text-white p-8 rounded-lg w-[450px] shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-zinc-900">Criar conta</h2>
            <p className="text-sm text-zinc-400">Cadastre-se com suas informações.</p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-400" htmlFor="email">
                Nome
              </label>
              <input
                className="w-full p-2 border border-zinc-400 rounded text-white"
                id="nome"
                placeholder="John Doe"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-400" htmlFor="email">
                E-mail
              </label>
              <input
                className="w-full p-2 border border-zinc-400 rounded text-zinc-400"
                id="email"
                placeholder="m@exemplo.com"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-400" htmlFor="password">
                Senha
              </label>
              <input
                className="w-full p-2 border border-zinc-400 rounded text-zinc-400"
                id="password"
                placeholder="........."
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <button className="w-full bg-zinc-900 text-white p-2 rounded mt-4" type="submit">
              Criar conta
            </button>
          </form>
          <div className="flex flex-col items-center mt-6">      
            <div className="flex items-center justify-center">
              <a className="text-sm text-zinc-400 hover:underline" href="/auth">
                Já possui conta? Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
