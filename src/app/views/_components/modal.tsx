import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { AuthService } from "@/services/auth-service"

export default function Modal() {
  const { register, handleSubmit,reset } = useForm()

  async function handleSignIn(data: any) {
    try{
      const result = await AuthService.booking(data)
      
      if(result){
        toast.success("Conta criada com sucesso!")
        reset()
      }
    }catch(err){
      toast.warning("UPS!! Erro inesperado!")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Reservar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reservar</DialogTitle>
          <DialogDescription>Preencha o formulário abaixo para criar uma reserva.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="chechin">
              Checkin
            </Label>
            <Input className="col-span-3" id="checkin" type="date" {...register("checkinDate")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="checkout">
              Checkout
            </Label>
            <Input className="col-span-3" id="checkout" type="date" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="amount">
              Guests
            </Label>
            <Input className="col-span-3" id="amount" type="number" {...register("checkoutDate")}/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit(handleSignIn)}>Reservar</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}