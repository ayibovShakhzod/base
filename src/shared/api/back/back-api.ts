import {
  AuthenticateApi,
  BuyurtmaRaqamResourceApi,
  Configuration,
  DistrictResourceApi,
  LoyihaResourceApi,
  ObjectTasnifiResourceApi,
  ObyektResourceApi,
  RegionResourceApi,
} from "./_generated"
import { BackApiConfig } from "./config"

export class BackApi {
  readonly auth = new AuthenticateApi(this.config)
  readonly obyektResource = new ObyektResourceApi(this.config)
  readonly regionResource = new RegionResourceApi(this.config)
  readonly districtResource = new DistrictResourceApi(this.config)
  readonly objectTasnifiResource = new ObjectTasnifiResourceApi(this.config)
  readonly objectTasinfiTuriResource = new ObjectTasnifiResourceApi(this.config)
  readonly loyihaResource = new LoyihaResourceApi(this.config)
  readonly buyurtmaRaqamResource = new BuyurtmaRaqamResourceApi(this.config)

  constructor(private config: Configuration = new BackApiConfig()) {}
}
