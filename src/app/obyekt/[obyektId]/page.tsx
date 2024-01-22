"use client"

import { CalendarClock, Database, Download, File, Link, Pencil, Trash } from "lucide-react"
import { AddEditModal } from "modules/object/add-edit-modal"
import { DeleteModal } from "modules/object/delete-modal"
import { EquipmentsTable } from "modules/object/equipments-table"
import { useState } from "react"
import { Button, Card, Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "shared/ui"

type Props = {
  params: {
    obyektId: string
  }
}

const obyektMockData = {
  id: "derv1ws0",
  name: "Monserrat",
  address: "Toshkent sh. Chilonzor tumani",
  lat: "41.311081",
  long: "69.240562",
  type: "Mobil",
  connection_method: "Wi-Fi",
  updated_at: new Date(),
  updated_by: "Rustam Admin",
}

export default function ObyektPage({ params }: Props) {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const onClickEdit = () => {
    setShowEditModal(true)
  }

  const onClickDelete = () => {
    setShowDeleteModal(true)
  }

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const onCloseEditModal = () => {
    setShowEditModal(false)
  }

  return (
    <>
      <div className="flex w-full gap-4 flex-col items-start pb-6">
        <div className="flex w-full gap-4 items-start">
          <Card className="p-4 flex w-3/5 flex-col gap-4 sticky top-4">
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col">
                <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-0">
                  Obyekt name Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
                  Description of the obyekt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
                  consectetur laborum amet eius, temporibus natus culpa assumenda modi eum itaque quidem minus id
                  aliquid distinctio. Nihil deleniti unde architecto voluptas.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="rounded-full gap-1" size="icon" onClick={onClickEdit}>
                        <Pencil size="18" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit object</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-destructive hover:text-destructive rounded-full gap-1"
                        size="icon"
                        onClick={onClickDelete}
                      >
                        <Trash size="18" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete object</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Separator />

            <div className="flex flex-col gap-6">
              <div className="flex gap-20">
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Manzili</div>
                  <div className="text-base font-semibold">
                    Toshkent shahri, Yunusobod tumani, Bog`bon ko`chasi, 12 uy
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Joylashuvi</div>
                  <div className="text-base font-semibold">41.312312, 69.123123</div>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Type</div>
                  <div className="text-base font-semibold">Mobil</div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Connection method</div>
                  <div className="text-base font-semibold">WIFI</div>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Created at</div>
                  <div className="text-base font-semibold">Rustam admin</div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Created date</div>
                  <div className="text-base font-semibold">2021-09-01 12:00</div>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Update at</div>
                  <div className="text-base font-semibold">Rustam admin</div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="text-sm font-medium text-muted-foreground">Update date</div>
                  <div className="text-base font-semibold">2021-09-01 12:00</div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4 flex flex-col w-2/5 sticky top-4">
            <h1 className="scroll-m-20 text-xl font-semibold tracking-tight transition-colors first:mt-0 mb-0 text-muted-foreground">
              Biriktirilgan fayllar
            </h1>
            <div className="flex flex-col items-start gap-6 mt-4">
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 w-full">
                <div className="flex flex-col">
                  <div className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
                    Loyihaning titul varog`i
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground flex flex-row  gap-2">
                    <div className="flex items-center gap-1">
                      <CalendarClock size="1em" />
                      2021-09-01 12:00
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <Database size="1em" />
                      25mb
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <File size="1em" />
                      PDF
                    </div>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={"secondary"} size="icon">
                        <Download size="22" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 w-full">
                <div className="flex flex-col">
                  <div className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
                    Loyihaning struktura shemasi
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground flex flex-row  gap-2">
                    <div className="flex items-center gap-1">
                      <CalendarClock size="1em" />
                      2021-09-01 12:00
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <Database size="1em" />
                      100mb
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <File size="1em" />
                      PDF
                    </div>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={"secondary"} size="icon">
                        <Link size="22" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Open Link</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 w-full">
                <div className="flex flex-col">
                  <div className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
                    Loyihaning elektir ta`minotiga ulanish shemasi
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground flex flex-row  gap-2">
                    <div className="flex items-center gap-1">
                      <CalendarClock size="1em" />
                      2021-09-01 12:00
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <Database size="1em" />
                      10mb
                    </div>
                    <Separator orientation="vertical" className="h-auto" />
                    <div className="flex items-center gap-1">
                      <File size="1em" />
                      DOCX
                    </div>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant={"secondary"} size="icon">
                        <Download size="22" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Card>
        </div>
        <EquipmentsTable params={params} />
      </div>

      {showEditModal && <AddEditModal obyekt={obyektMockData} onClose={onCloseEditModal} open={showEditModal} />}
      {showDeleteModal && <DeleteModal obyekt={obyektMockData} onClose={onCloseDeleteModal} open={showDeleteModal} />}
    </>
  )
}
