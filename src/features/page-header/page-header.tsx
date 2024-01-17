import Link from "next/link"
import { CSSProperties } from "react"
import { cn } from "shared/lib"

export interface IPageHeader {
  className?: string
  style?: CSSProperties
  htmlId?: string
}

export const PageHeader = (props: IPageHeader) => {
  return (
    <header className="w-lvw px-6 pb-1 flex items-center my-4">
      <Link
        href="/"
        className={cn(
          "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary bg-muted font-medium text-primary",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
      >
        Users
      </Link>
      <Link
        href="#"
        className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
      >
        Map
      </Link>
    </header>
  )
}
