import './globals.css'
import { Figtree } from 'next/font/google'
import React from "react";
import Sidebar from "@/components/Sidebar";

const inter = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Music world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Sidebar>
        {children}
      </Sidebar>
      </body>
    </html>
  )
}
