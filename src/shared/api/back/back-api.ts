import { AuthenticateApi, Configuration } from "./_generated"
import { BackApiConfig } from "./config"

export class BackApi {
  readonly auth = new AuthenticateApi(this.config)

  constructor(private config: Configuration = new BackApiConfig()) {}
}
