import { PageHeader } from "features/page-header"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageHeader />
      <main className="px-6">{children}</main>
    </>
  )
}

export default DashboardLayout
