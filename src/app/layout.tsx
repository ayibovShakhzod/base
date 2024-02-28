/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "shared/styles/app.scss"
import { YandexMap } from "shared/ui"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* // eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://api-maps.yandex.ru/3.0/?apikey=2eade8f8-2772-41de-a815-93eb1ff3de9f&lang=ru_RU" />
      </head>
      <body className={inter.className}>
        {children}
        <YandexMap />
      </body>
    </html>
  )
}
