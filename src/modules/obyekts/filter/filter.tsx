"use client"

import { ObyektListRequestToURL } from "entity/obyekts/obyekt-request"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { api } from "shared/api"
import { GetAllByFilterRequest } from "shared/api/back/_generated"
import { cn } from "shared/lib"
import { Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "shared/ui"

interface IObyektsFilter {
  request: GetAllByFilterRequest
  className?: string
}

export const ObyektsFilter = (props: IObyektsFilter) => {
  const [data, setData] = useState<GetAllByFilterRequest>(props.request)
  const router = useRouter()
  const pathname = usePathname()

  const regionResource = api.regionResource.useGetAllRegions()
  const districtResource = api.districtResource.useGetAllDistricts()
  const objectTasnifiResource = api.objectTasnifiResource.useGetAllObjectTasnifis()
  const objectTasinfiTuriResource = api.objectTasinfiTuriResource.useGetAllObjectTasnifis()
  const loyihaResource = api.loyihaResource.useGetAllLoyihas()
  const buyurtmaRaqamResource = api.buyurtmaRaqamResource.useGetAllBuyurtmaRaqams()

  const onUpdateData = (update: Partial<GetAllByFilterRequest>) => {
    const newRequest = { ...data, ...update }
    setData(newRequest)
    onUpdateRequest(newRequest)
  }

  const onUpdateRequest = (update: Partial<GetAllByFilterRequest>) => {
    const newRequest = { ...props.request, ...update }
    const href = ObyektListRequestToURL(newRequest, pathname)

    router.replace(href, {})
  }

  return (
    <div className={cn("flex flex-col items-center gap-5 justify-between", props.className)}>
      <div className="flex gap-5 w-full">
        <div className="flex gap-1 flex-col w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="search">
            Qidirish
          </Label>
          <Input
            id="search"
            placeholder="Ismi bo`yicha qidirish..."
            value={""}
            onChange={(event) => {
              console.log(event.target.value)
            }}
            className="w-full border-primary placeholder:italic"
          />
        </div>

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
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="region">
            Region
          </Label>
          <Select
            value={data.regionId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ regionId: Number(val) })
            }}
            defaultValue="0"
          >
            <SelectTrigger id="region" className="w-full">
              <SelectValue placeholder="Respublika" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>
                {regionResource.data?.map((region) => (
                  <SelectItem key={region.id} value={region.id?.toString() || ""}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="district">
            Tuman
          </Label>
          <Select
            value={data.districtId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ districtId: Number(val) })
            }}
            defaultValue="0"
          >
            <SelectTrigger id="district" className="w-full">
              <SelectValue placeholder="Tuman" className="text-left" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>

                {districtResource.data?.map((district) => (
                  <SelectItem key={district.id} value={district.id?.toString() || ""}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="obyekt-tasnifi">
            Obyekt tasnifi
          </Label>
          <Select
            defaultValue="0"
            value={data.objectTasnifiId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ objectTasnifiId: Number(val) })
            }}
          >
            <SelectTrigger id="obyekt-tasnifi">
              <SelectValue placeholder="Obyekt tasnifi" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>

                {objectTasnifiResource.data?.map((objectTasnifi) => (
                  <SelectItem key={objectTasnifi.id} value={objectTasnifi.id?.toString() || ""}>
                    {objectTasnifi.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="obyekt-tasnifi-turi">
            Obyekt tasnifi turi
          </Label>
          <Select
            value={data.objectTasnifiTuriId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ objectTasnifiTuriId: Number(val) })
            }}
            defaultValue="0"
          >
            <SelectTrigger id="obyekt-tasnifi-turi">
              <SelectValue placeholder="Barcha turdagi obyektlar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>
                {objectTasinfiTuriResource.data?.map((objectTasnifiTuri) => (
                  <SelectItem key={objectTasnifiTuri.id} value={objectTasnifiTuri.id?.toString() || ""}>
                    {objectTasnifiTuri.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="loyiha-nomi">
            Loyiha nomi
          </Label>
          <Select
            value={data.loyihaId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ loyihaId: Number(val) })
            }}
            defaultValue="0"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Loyiha nomini tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>
                {loyihaResource.data?.map((loyiha) => (
                  <SelectItem key={loyiha.id} value={loyiha.id?.toString() || ""}>
                    {loyiha.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label className="text-xs text-muted-foreground" htmlFor="buyurtma-raqam">
            Buyurtma raqam
          </Label>
          <Select
            value={data.buyurtmaRaqamId?.toString()}
            onValueChange={(val) => {
              onUpdateData({ buyurtmaRaqamId: Number(val) })
            }}
            defaultValue="0"
          >
            <SelectTrigger className="w-full" id="buyurtma-raqam">
              <SelectValue placeholder="Buyurtma raqamni tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0">Barchasi</SelectItem>
                {buyurtmaRaqamResource.data?.map((buyurtmaRaqam) => (
                  <SelectItem key={buyurtmaRaqam.id} value={buyurtmaRaqam.id?.toString() || ""}>
                    {buyurtmaRaqam.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
