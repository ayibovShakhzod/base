"use client"

import * as React from "react"
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
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "shared/ui"
import { useRouter } from "next/navigation"

const data: IObyekt[] = [
  {
    id: "m5gr84i9",
    name: "Kamera 213",
    model: "Hikvision",
    serial_number: "123123123",
    type: "Kuzatuv",
    ip_address: "192.168.21.111",
    status: "Active",
    updatedAt: "2021-09-21T12:00:00.000Z",
    updatedBy: "Rustam Admin",
  },
  {
    id: "3u1reuv4",
    name: "Kamera 423",
    model: "Hikvision",
    serial_number: "123123123",
    type: "Kuzatuv",
    ip_address: "192.168.21.111",
    status: "Active",
    updatedAt: "2021-09-21T12:00:00.000Z",
    updatedBy: "Rustam Admin",
  },
  {
    id: "derv1ws0",
    name: "Kamer S12",
    model: "Hikvision",
    serial_number: "123123123",
    type: "Kuzatuv",
    ip_address: "192.168.21.111",
    status: "Active",
    updatedAt: "2021-09-21T12:00:00.000Z",
    updatedBy: "Rustam Admin",
  },
  {
    id: "5kma53ae",
    name: "Kamera A1334",
    model: "Hikvision",
    serial_number: "123123123",
    type: "Kuzatuv",
    ip_address: "192.168.21.111",
    status: "Active",
    updatedAt: "2021-09-21T12:00:00.000Z",
    updatedBy: "Rustam Admin",
  },
  {
    id: "bhqecj4p",
    name: "Kamera P3123",
    model: "Hikvision",
    serial_number: "123123123",
    type: "Kuzatuv",
    ip_address: "192.168.21.111",
    status: "Active",
    updatedAt: "2021-09-21T12:00:00.000Z",
    updatedBy: "Rustam Admin",
  },
]

export type IObyekt = {
  id: string
  name: string
  model: string
  serial_number: string
  type: string
  ip_address: string
  status: string
  updatedAt: Date | string
  updatedBy: string
}

export const columns: ColumnDef<IObyekt>[] = [
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
    accessorKey: "model",
    cell: ({ row }) => <div>{row.getValue("model")}</div>,
  },
  {
    accessorKey: "type",
  },
  {
    accessorKey: "serial_number",
  },
  {
    accessorKey: "ip_address",
  },
  {
    accessorKey: "status",
  },
  {
    accessorKey: "updatedAt",
    cell: ({ row }) => <div>{row.getValue("updatedAt")}</div>,
  },
  {
    accessorKey: "updatedBy",
    cell: ({ row }) => <div>{row.getValue("updatedBy")}</div>,
  },
]

interface IEquipmentTable {
  params: {
    obyektId: string
    equipmentId: string
  }
}

export function EquipmentTable({ params }: IEquipmentTable) {
  const router = useRouter()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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

  return (
    <div className="w-full">
      <Card className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-20 justify-between w-full">
          <div className="flex gap-6 items-center">
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-0">
              Kamera
            </h1>
            <Input
              placeholder="Ismi bo`yicha qidirish..."
              value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
              className="min-w-[280px] border-primary placeholder:italic"
            />
          </div>
          <div className="flex gap-5 justify-end">
            <Button variant="outline">
              Yangi kamera qo`shish <PlusCircle className="ml-2 h-4 w-4" />
            </Button>
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
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
                      <TableRow data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-64">
                      <ContextMenuItem inset disabled>
                        Edit
                      </ContextMenuItem>
                      <ContextMenuItem inset disabled>
                        Delete
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
            {table.getFilteredRowModel().rows.length} ta qatordan {table.getFilteredSelectedRowModel().rows.length} tasi
            tanlandi
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
  )
}
