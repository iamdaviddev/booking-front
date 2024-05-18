'use client'

import { FilePen, Trash } from "lucide-react";
import { Header } from "../_components/header";
import { Sidebar } from "../_components/sidebar";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import Modal from "./_components/modal";
import { useForm } from "react-hook-form";
import { authContext } from "@/providers/SessionProvider";

export default function Bookings(){
  const { rooms } = useContext(authContext)

  return(
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <div className="container mx-auto max-w-6xl space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl">Quartos</h1> 
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">id</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Nome</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Preço</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Capacidade</th>
                </tr>
              </thead>
              {rooms.rooms.map((room)=>(
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4">{room.id}</td>
                    <td className="px-6 py-4">{room.name}</td>
                    <td className="px-6 py-4">{room.price}</td>
                    <td className="px-6 py-4">{room.capacity}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="flex justify-end">
            <Modal/>
          </div>
        </div>
      </div>
    </div>
  )
} 