/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0ELdm8URIgJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar usuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>Fill out the form below to add a new user to your account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" placeholder="John Doe" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" id="email" placeholder="john@example.com" type="email" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="password">
              Password
            </Label>
            <Input className="col-span-3" id="password" type="password" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create User</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}