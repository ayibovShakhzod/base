"use client"

import React, { useState } from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, MoreHorizontal, PlusCircle } from "lucide-react"

import {
  Button,
  Card,
  Checkbox,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "shared/ui"
import { useRouter } from "next/navigation"
import { AddEditModal } from "../../object/add-edit-modal"
import { useCopyToClipboard } from "shared/lib"
import { DeleteModal } from "modules/object/delete-modal"

const data: IObyekt[] = [
  {
    id: "m5gr84i9",
    name: "Ken",
    address: "Toshkent sh. Chilonzor tumani",
    lat: "41.311081",
    long: "69.240562",
    type: "Mobil",
    connection_method: "Wi-Fi",
    updated_at: new Date(),
    updated_by: "Rustam Admin",
  },
  {
    id: "3u1reuv4",
    name: "Abe",
    address: "Toshkent sh. Chilonzor tumani",
    lat: "41.311081",
    long: "69.240562",
    type: "Mobil",
    connection_method: "Wi-Fi",
    updated_at: new Date(),
    updated_by: "Rustam Admin",
  },
  {
    id: "derv1ws0",
    name: "Monserrat",
    address: "Toshkent sh. Chilonzor tumani",
    lat: "41.311081",
    long: "69.240562",
    type: "Mobil",
    connection_method: "Wi-Fi",
    updated_at: new Date(),
    updated_by: "Rustam Admin",
  },
  {
    id: "5kma53ae",
    name: "Lauryn",
    address: "Toshkent sh. Chilonzor tumani",
    lat: "41.311081",
    long: "69.240562",
    type: "Mobil",
    connection_method: "Wi-Fi",
    updated_at: new Date(),
    updated_by: "Rustam Admin",
  },
  {
    id: "bhqecj4p",
    name: "Carmella",
    address: "Toshkent sh. Chilonzor tumani",
    lat: "41.311081",
    long: "69.240562",
    type: "Mobil",
    connection_method: "Wi-Fi",
    updated_at: new Date(),
    updated_by: "Rustam Admin",
  },
]

export type IObyekt = {
  id: string
  name: string
  address: string
  lat: string
  long: string
  type: string
  connection_method: string
  updated_at: Date
  updated_by: string
}

export const columns: ColumnDef<IObyekt>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-3 hover:bg-transparent"
        >
          Ismi
          {column.getIsSorted() && (
            <>
              {column.getIsSorted() === "asc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
              ) : (
                <ArrowUp className="ml-2 h-4 w-4" />
              )}
            </>
          )}
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "address",
    header: () => <div className="">Manzili</div>,
    cell: ({ row }) => <div className="">{row.getValue("address")}</div>,
  },
  {
    accessorKey: "lat",
    header: () => <div className="">Joylashuv(lat, long)</div>,
    cell: ({ row }) => {
      return (
        <div className="">
          {row.getValue("lat")}, {row.original.long}
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: () => <div className="">Type</div>,
    cell: ({ row }) => <div className="">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "connection_method",
    header: () => <div className="">Connection method</div>,
    cell: ({ row }) => <div className="">{row.getValue("connection_method")}</div>,
  },
  {
    accessorKey: "updated_at",
    header: () => <div className="">Updated date</div>,
    cell: ({ row }) => <div>{new Date(row.getValue("updated_at") as string).toISOString()}</div>,
  },
  {
    accessorKey: "updated_by",
    header: () => <div className="">Updated at</div>,
    cell: ({ row }) => <div>{row.getValue("updated_by")}</div>,
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <div className='flex justify-end'>
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant='ghost' className='h-8 w-8 p-0'>
  //               <span className='sr-only'>Open menu</span>
  //               <MoreHorizontal className='h-4 w-4' />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align='end'>
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem
  //               onClick={() =>
  //                 navigator.clipboard.writeText(
  //                   `${payment.lat}, ${payment.long}`
  //                 )
  //               }
  //             >
  //               Copy location(lat, long)
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem>Edit</DropdownMenuItem>
  //             <DropdownMenuItem>Delete</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </div>
  //     )
  //   },
  // },
]

export const DataTableDemo = () => {
  const router = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const [copiedText, copy] = useCopyToClipboard()
  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const [selectedObyekt, setSelectedObyekt] = useState<IObyekt | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const onClickAdd = () => {
    setSelectedObyekt(null)
    setShowAddEditModal(true)
  }

  const onClickEdit = (obyekt: IObyekt) => {
    setSelectedObyekt(obyekt)
    setShowAddEditModal(true)
  }

  const onClickDelete = (obyekt: IObyekt) => {
    setSelectedObyekt(obyekt)
    setShowDeleteModal(true)
  }

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false)
    setSelectedObyekt(null)
  }

  const onCloseAddEditModal = () => {
    setShowAddEditModal(false)
    setSelectedObyekt(null)
  }

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const onDoubleClickRow = (row: Row<IObyekt>) => {
    router.push(`/obyekt/${row.original.id}`)
  }

  return (
    <>
      <div className="w-full">
        <Button
          variant="default"
          className="flex fixed bottom-6 right-6 rounded-full p-2 z-50 h-[40px]"
          size="sm"
          onClick={onClickAdd}
        >
          <PlusCircle size="24" />
        </Button>
        <Card className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-20 justify-between w-full">
            <div className="flex gap-4 w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Respublika" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">Hammasi</SelectItem>
                    <SelectItem value="1">Toshkent sh</SelectItem>
                    <SelectItem value="2">Namangan viloyati</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tuman" className="text-left" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">Hammasi</SelectItem>
                    <SelectItem value="1.1">Olmazor tumani</SelectItem>
                    <SelectItem value="1.2">Bektemir tumani</SelectItem>
                    <SelectItem value="1.3">Mirobod tumani</SelectItem>
                    <SelectItem value="1.4">Mirzo-Ulug`bek tumani</SelectItem>
                    <SelectItem value="1.5">Sergeli tumani</SelectItem>
                    <SelectItem value="1.6">Chilonzor tumani</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Obyekt tasnifi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Ijtimoyi</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Barcha turdagi obyektlar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">Maktab</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Loyiha nomini tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">Lorem</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Buyurtma raqamni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0">Lorem</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-5 justify-end">
              <Input
                placeholder="Ismi bo`yicha qidirish..."
                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
                className="w-full min-w-[280px] border-primary placeholder:italic"
              />

              {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className=''>
                  Columns <ChevronDown className='ml-2 h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='capitalize'
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu> */}
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <ContextMenu key={row.id}>
                      <ContextMenuTrigger className="w-full" asChild>
                        <TableRow
                          data-state={row.getIsSelected() && "selected"}
                          onDoubleClick={() => onDoubleClickRow(row)}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                          ))}
                        </TableRow>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="w-64">
                        <ContextMenuItem inset onClick={() => onDoubleClickRow(row)}>
                          Open
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem inset onClick={() => copy(`${row.original.lat}, ${row.original.long}`)}>
                          Copy lat and long
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem inset onClick={() => onClickEdit(row.original)}>
                          Edit
                        </ContextMenuItem>
                        <ContextMenuItem inset onClick={() => onClickDelete(row.original)}>
                          Delete
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem inset disabled>
                          Open {row.original.updated_by} profile
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredRowModel().rows.length} ta qatordan {table.getFilteredSelectedRowModel().rows.length}{" "}
              tasi tanlandi
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {showAddEditModal && (
        <AddEditModal obyekt={selectedObyekt} onClose={onCloseAddEditModal} open={showAddEditModal} />
      )}
      {showDeleteModal && <DeleteModal obyekt={selectedObyekt} onClose={onCloseDeleteModal} open={showDeleteModal} />}
    </>
  )
}
