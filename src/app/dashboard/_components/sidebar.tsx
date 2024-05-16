import { 
  Hotel, 
  LayoutDashboard, 
  Home, 
  Users, 
  Settings, 
  LogOut 
} from "lucide-react";

import Link from "next/link";

export function Sidebar(){
  return(
    <div className="bg-gray-900 text-gray-400 w-64 p-6 border-r border-gray-800">
        <div className="flex items-center mb-6">
          <Hotel className="text-white mr-1" />
          <span className="text-white font-semibold text-lg">yami</span>
        </div>
        <nav className="space-y-2">
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/dashboard">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/dashboard/bookings">
            <Home/>
            <span>Quartos</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/dashboard/user">
            <Users/>
            <span>Usuários</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="#">
            <Settings />
            <span>Definições</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="#">
            <LogOut/>
            <span>Sair</span>
          </Link>
        </nav>
      </div>
  )
}