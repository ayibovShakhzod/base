import { ResponseContext } from "../_generated"
import { setApiKey } from "../lib/current-api-key"

const baseUrl = `/${process.env.NEXT_PUBLIC_API_PREFIX}`

export const successAuthMiddleware = async (context: ResponseContext): Promise<Response | void> => {
  let url = context.url

  if (url.startsWith(baseUrl)) {
    url = url.substring(baseUrl.length)
  }

  if (context.response.ok && url === `/api/authenticate` && context.init.method === "POST") {
    const response = await context.response.json()
    setApiKey(response.id_token)
  }

  if (context.response.status === 401) {
    setApiKey(undefined)
    return
  }
}
