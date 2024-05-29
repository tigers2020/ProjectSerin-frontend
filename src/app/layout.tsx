// app/layout.tsx
"use client"

import './globals.css'
import MultiColumnLayouts from '../components/layouts/MultiColumnLayouts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <MultiColumnLayouts />
        <main className="lg:pl-72 xl:pl-96">
          {children}
        </main>
      </body>
    </html>
  )
}
