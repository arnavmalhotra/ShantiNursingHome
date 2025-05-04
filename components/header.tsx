"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Shanti Nursing Home</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/doctor" className="text-sm font-medium hover:underline underline-offset-4">
            Our Doctor
          </Link>
          <Link href="/appointment" className="text-sm font-medium hover:underline underline-offset-4">
            Appointment
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/appointment">
            <Button>Book Appointment</Button>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link 
                href="/" 
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/doctor" 
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Our Doctor
              </Link>
              <Link 
                href="/appointment" 
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Appointment
              </Link>
              <Link 
                href="/appointment" 
                className="mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

