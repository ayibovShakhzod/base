import { SearchParamParser } from "shared/lib/search-param-parser"
import qs from "query-string"
import { GetAllByFilterRequest } from "shared/api/back/_generated"

export const PER_PAGE = 100

export const ObyektListRequestFromURL = (
  pathname: string,
  searchParams?: Record<string, string | string[]>,
): GetAllByFilterRequest => {
  const sp = new SearchParamParser(searchParams)

  return {
    page: sp.getNumber("page") ?? 1,
    size: sp.getNumber("size") ?? PER_PAGE,
    regionId: sp.getNumber("regionId"),
    districtId: sp.getNumber("districtId"),
    objectTasnifiId: sp.getNumber("objectTasnifiId"),
    objectTasnifiTuriId: sp.getNumber("objectTasnifiTuriId"),
    loyihaId: sp.getNumber("loyihaId"),
    buyurtmaRaqamId: sp.getNumber("buyurtmaRaqamId"),
  }
}

export const ObyektListRequestToURL = (data: GetAllByFilterRequest, pathname?: string) => {
  const searchParams: Record<string, string | string[]> = {}

  if (data.page) searchParams["page"] = data.page.toString()
  if (data.size) searchParams["size"] = data.size.toString()
  if (data.regionId) searchParams["regionId"] = data.regionId.toString()
  if (data.districtId) searchParams["districtId"] = data.districtId.toString()
  if (data.objectTasnifiId) searchParams["objectTasnifiId"] = data.objectTasnifiId.toString()
  if (data.objectTasnifiTuriId) searchParams["objectTasnifiTuriId"] = data.objectTasnifiTuriId.toString()
  if (data.loyihaId) searchParams["loyihaId"] = data.loyihaId.toString()
  if (data.buyurtmaRaqamId) searchParams["buyurtmaRaqamId"] = data.buyurtmaRaqamId.toString()

  return pathname + "?" + qs.stringify(searchParams)
}
