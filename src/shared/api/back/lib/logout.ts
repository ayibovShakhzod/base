"use client"

import { useSWRConfig } from "swr"
import { setApiKey } from "./current-api-key"

export const logout = async () => {
  setApiKey(undefined)
}

export const useLogout = () => {
  const { cache } = useSWRConfig()

  return () => {
    setApiKey(undefined)
    ;(cache as any)?.clear?.()
  }
}
