import { isBrowser } from "shared/lib"
import { successAuthMiddleware } from "./middleware"
import { Configuration, ConfigurationParameters, HTTPHeaders } from "./_generated"
import { getApiKey } from "./lib"

const base: ConfigurationParameters = {
  fetchApi: fetch,
  basePath: `/${process.env.NEXT_PUBLIC_API_PREFIX}`,
}

const browser: ConfigurationParameters = {
  ...base,
  get headers(): HTTPHeaders {
    const apiKey = getApiKey()
    return apiKey ? { Authorization: `Bearer ${apiKey}` } : {}
  },
  middleware: [{ post: successAuthMiddleware }],
}

const server: ConfigurationParameters = {
  ...base,
  fetchApi: fetch,
}

export class BackApiConfig extends Configuration {
  constructor() {
    super(isBrowser() ? browser : server)
  }
}
