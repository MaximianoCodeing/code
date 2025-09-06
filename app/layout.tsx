import "@app/global.scss"
import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "VibeSpecifier Code",
  description: "Follow your vibe and let application do the rest.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
