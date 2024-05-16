import { AvatarImage, Avatar } from "@/components/ui/avatar";

export function Profile(){
  return(
    <div className="flex items-center gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
      </Avatar>
    </div>
  )
}