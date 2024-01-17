import { ChevronLeft } from "lucide-react"
import { EquipmentTable } from "modules/equipment/table"
import Link from "next/link"
import { Button, Card } from "shared/ui"

type Props = {
  params: {
    obyektId: string
    equipmentId: string
  }
  children: React.ReactNode
}

const EquipmentPage = ({ params }: Props) => {
  return (
    <div className="flex flex-col gap-4 justify-start items-start">
      <Button variant="ghost" size="sm" asChild>
        <Link href={`/obyekt/${params.obyektId}`}>
          <ChevronLeft />
          Obyekt name
        </Link>
      </Button>
      <EquipmentTable params={params} />
    </div>
  )
}

export default EquipmentPage
