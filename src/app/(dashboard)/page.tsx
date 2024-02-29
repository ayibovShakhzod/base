import { ObyektListRequestFromURL } from "entity/obyekts/obyekt-request"
import { DataTableDemo } from "modules/obyekts/table"

interface IHome {
  searchParams?: Record<string, string | string[]>
}

export default function Home(props: IHome) {
  const request = ObyektListRequestFromURL("", props.searchParams)
  return (
    <>
      <DataTableDemo request={request} />
    </>
  )
}
