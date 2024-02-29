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
import { ArrowDown, ArrowUp, PlusCircle } from "lucide-react"

import {
  Button,
  Card,
  Checkbox,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
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
import { ObyektDTO, api } from "shared/api"
import { ObyektsFilter } from "../filter"
import { GetAllByFilterRequest } from "shared/api/back/_generated"

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

export const columns: ColumnDef<ObyektDTO>[] = [
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
          {row.original.latitude}, {row.original.longitude}
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

interface IObyektsTable {
  request: GetAllByFilterRequest
}

export const DataTableDemo = (props: IObyektsTable) => {
  const router = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const [copiedText, copy] = useCopyToClipboard()
  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const [selectedObyekt, setSelectedObyekt] = useState<ObyektDTO | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const obyektResource = api.obyektResource.useGetAllByFilter(props.request)

  const onClickAdd = () => {
    setSelectedObyekt(null)
    setShowAddEditModal(true)
  }

  const onClickEdit = (obyekt: ObyektDTO) => {
    setSelectedObyekt(obyekt)
    setShowAddEditModal(true)
  }

  const onClickDelete = (obyekt: ObyektDTO) => {
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
    data: obyektResource.data || [],
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

  const onDoubleClickRow = (row: Row<ObyektDTO>) => {
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
        <Card className="p-4 flex gap-4 h-fulll">
          <div className="flex w-full flex-col gap-4">
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
                          <ContextMenuItem
                            inset
                            onClick={() => copy(`${row.original.latitude}, ${row.original.longitude}`)}
                          >
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
                          {/* <ContextMenuItem inset disabled>
                          Open {row.original.} profile
                        </ContextMenuItem> */}
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
          </div>
          <ObyektsFilter request={props.request} className="w-[320px] flex-shrink-0" />
        </Card>
      </div>

      {/* {showAddEditModal && (
        <AddEditModal obyekt={selectedObyekt} onClose={onCloseAddEditModal} open={showAddEditModal} />
      )}
      {showDeleteModal && <DeleteModal obyekt={selectedObyekt} onClose={onCloseDeleteModal} open={showDeleteModal} />} */}
    </>
  )
}
