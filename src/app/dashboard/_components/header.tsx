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
import { useContext } from "react";
import { authContext } from "@/providers/SessionProvider";
import { AvatarUser } from "@/components/profile";

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
        <AvatarUser/>
      </div>
    </header>

  )
}