import { PageHeader } from "features/page-header"

type Props = {
  params: {
    obyektId: string
  }
  children: React.ReactNode
}

const ObyektLayout = ({ children, params }: Props) => {
  return (
    <>
      <PageHeader />
      <main className="px-6 w-full">{children}</main>
    </>
  )
}

export default ObyektLayout
