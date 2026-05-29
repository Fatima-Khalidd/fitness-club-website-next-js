'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/hfc-logo.jpg"
            alt="Hamza Fitness Club Logo"
            className="w-10 h-10 object-contain rounded-md"
          />
          <span className="font-extrabold text-white tracking-wider uppercase">
            Hamza Fitness Club
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 uppercase tracking-wide text-sm font-medium">
            <li><Link href="/" className="hover:text-red-500 transition text-white">Home</Link></li>
            <li><Link href="/classes" className="hover:text-red-500 transition text-white">Classes</Link></li>
            <li><Link href="/trainers" className="hover:text-red-500 transition text-white">Trainers</Link></li>
            <li><Link href="/pricing" className="hover:text-red-500 transition text-white">Membership Plans</Link></li>
            <li><Link href="/aboutus" className="hover:text-red-500 transition text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition text-white">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Book Button */}
        <Link
          href="/booking"
          className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-sm uppercase font-extrabold rounded"
        >
          Book Free Appointment
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-900">
          <ul className="px-6 py-3 space-y-2 uppercase tracking-wide text-sm">
            <li><Link href="/" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/classes" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>Classes</Link></li>
            <li><Link href="/trainers" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>Trainers</Link></li>
            <li><Link href="/pricing" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>Membership Plans</Link></li>
            <li><Link href="/aboutus" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/contact" className="block py-2 text-white" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <Link href="/booking" className="inline-flex bg-red-600 text-white px-5 py-2 text-sm uppercase font-bold rounded" onClick={() => setMenuOpen(false)}>
                Book Free Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}