import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cadastrar quarto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Quarto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Input className="col-span-3" id="description" type="text"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="capacity">
              Capacidade
            </Label>
            <Input className="col-span-3" id="capacity" type="number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="price">
              Preço
            </Label>
            <Input className="col-span-3" id="price" type="number" />
          </div><div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="images">
              Imagem
            </Label>
            <Input className="col-span-3" id="images" type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Cadastrar quarto</Button>
          <div>
            <Button variant="outline">Cancelar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}