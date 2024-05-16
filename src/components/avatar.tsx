import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";


type userProps = {
  user: {email: string, name: string}
}

export function Profile({ user }: userProps){
  return(
    <div className="flex items-center gap-4">
      <div className="text-sm font-medium">{user.email}</div>
      <Avatar className="h-10 w-10">
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
      </Avatar> 
    </div>
  )
}