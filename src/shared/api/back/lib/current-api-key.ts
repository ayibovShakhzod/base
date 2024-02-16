import { LocalStorage } from "shared/lib"

const KEY = process.env.NEXT_PUBLIC_PROJECT_PREFIX + ":api-key"

export const getAuthed = () => {
  return !!getApiKey()
}

export const getApiKey = (): string | undefined => {
  return LocalStorage.getItem(KEY)
}

export const setApiKey = (value: string | undefined) => {
  if (value) {
    LocalStorage.setItem(KEY, value)
  } else {
    LocalStorage.removeItem(KEY)
  }
}

export const onApiKeyChange = (fn: (value: string | undefined) => void) => {
  return LocalStorage.subscribe(KEY, fn)
}
