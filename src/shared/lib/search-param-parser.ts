import { EnumType } from "shared/lib/types"
import { ValueOf } from "next/constants"

export class SearchParamParser {
  constructor(private searchParams?: Record<string, string | string[]>) {}

  getString = (key: string): string | undefined => {
    const value = this.searchParams?.[key]
    if (typeof value !== "string") return undefined
    return value
  }

  getNumber = (key: string): number | undefined => {
    const value = this.searchParams?.[key]
    if (typeof value !== "string") return undefined
    return Number(value)
  }

  getArray = (key: string): string[] | undefined => {
    const value = this.searchParams?.[key]
    if (value === undefined) return undefined
    if (typeof value === "string") return [value]
    return value
  }

  getEnum = <T>(key: string, enumeration: EnumType & T): ValueOf<T> | undefined => {
    const value = this.searchParams?.[key]
    if (Object.values(enumeration).includes(value as string)) return value as ValueOf<T>
    return undefined
  }
}
