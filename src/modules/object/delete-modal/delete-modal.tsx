import { IObyekt } from "modules/objects/table"
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "shared/ui"

interface IDeleteModal {
  obyekt: IObyekt | null
  onClose?: () => void
  open: boolean
}

export const DeleteModal = ({ obyekt, onClose, open }: IDeleteModal) => {
  const deleteObyekt = () => {
    onClose?.()
  }

  const onOpenChange = (open: boolean) => {
    onClose?.()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete {obyekt?.name} obyekt</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {obyekt?.name} obyekt? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" onClick={deleteObyekt} variant={"destructive"} className="min-w-24">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
