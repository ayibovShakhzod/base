import Link from "next/link"
import { CSSProperties } from "react"
import { cn } from "shared/lib"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "shared/ui"

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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors text-muted-foreground cursor-default">
              Users
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Soon</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors text-muted-foreground cursor-default">
              Map
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Soon</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  )
}
