import { Trash } from "lucide-react";
import { Header } from "../_components/header";
import { Sidebar } from "../_components/sidebar";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { authContext } from "@/providers/SessionProvider";

export default function Bookings(){
  const { bookings } = useContext(authContext)

  return(
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <div className="container mx-auto max-w-6xl space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl">Reservas</h1> 
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">id</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Nome</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Email</th>
                  <th className="px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100">Status</th>
                </tr>
              </thead>
              {
                bookings.bookings.map((booking) => (
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4">{booking.id}</td>
                      <td className="px-6 py-4">{booking.name}</td>
                      <td className="px-6 py-4">{booking.email}</td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 