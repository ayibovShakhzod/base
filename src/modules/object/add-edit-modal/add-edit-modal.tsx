import { zodResolver } from "@hookform/resolvers/zod"
import { IObyekt } from "modules/obyekts/table"

import { useForm } from "react-hook-form"
import { ObyektDTO } from "shared/api"
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "shared/ui"
import { z } from "zod"

interface IAddEditModal {
  obyekt: IObyekt | null
  onClose?: () => void
  open: boolean
}

const formSchema = z.object({
  name: z.string(),
  address: z.string(),
  lat: z.number(),
  long: z.number(),
  type: z.string(),
})

export const AddEditModal = ({ obyekt, onClose, open }: IAddEditModal) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      lat: 0,
      long: 0,
      type: "",
    },
    values: {
      name: obyekt?.name || "",
      address: obyekt?.address || "",
      type: obyekt?.id || "",
      lat: Number(obyekt?.lat) || 0,
      long: Number(obyekt?.long) || 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    onClose?.()
  }

  const onOpenChange = (open: boolean) => {
    onClose?.()
  }

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{obyekt?.id ? `Edit ${obyekt.name}` : "Add"} obyekt</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form id="addEditObyektForm" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between gap-4">
                <FormField
                  control={form.control}
                  name="lat"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter latitude" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="long"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter longitude" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type="submit" form="addEditObyektForm">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
