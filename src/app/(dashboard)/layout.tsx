"use client"

import { PageHeader } from "features/page-header"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthed } from "shared/api"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const authed = useAuthed()
  const router = useRouter()

  useEffect(() => {
    if (!authed) {
      router.push("/login")
    }
  })

  return (
    <>
      <PageHeader />
      <main className="px-6">{children}</main>
    </>
  )
}

export default DashboardLayout
