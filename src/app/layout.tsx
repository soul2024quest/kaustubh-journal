import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kaustubh's Journal",
  description: 'A mental health archive — thoughts, reflections, and records of the inner life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
