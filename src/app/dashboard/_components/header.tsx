import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenuTrigger, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuContent, 
  DropdownMenu 
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, SearchIcon, Settings, User } from "lucide-react";
import { Profile } from "@/components/avatar";

export function Header(){
  return(
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Button className="rounded-full" size="icon" variant="ghost">
        <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </Button>
      <Input
        className="bg-gray-100 dark:bg-gray-800 border-none focus:ring-0 text-sm"
        placeholder="Search..."
        type="search"
      />
    </div>
    <div className="flex items-center gap-4">
      <Button className="rounded-full" size="icon" variant="ghost">
        <Bell />
      </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Profile/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={12}>
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              Definições
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

  )
}