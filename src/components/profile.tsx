import { 
  DropdownMenuTrigger, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuContent, 
  DropdownMenu 
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useContext } from "react";
import { authContext } from "@/providers/SessionProvider";
import { LogOut, Settings, User } from "lucide-react";

export function AvatarUser(){
  const { user, token, logOut } = useContext(authContext)
  return(
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <div className="relative right-[4.2rem]">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium">{user?.email}</div>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  </Avatar> 
                </div>
              </div>
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
            <DropdownMenuItem onClick={() => logOut()}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}