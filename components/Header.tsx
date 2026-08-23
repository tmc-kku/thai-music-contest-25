'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-ci-purple text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/ci/KKU-gold.svg"
            alt="โลโก้การประกวดดนตรีไทย"
            width={22}
            height={36}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div>
            <div className="text-lg leading-tight font-bold text-ci-gold">
              การประกวดดนตรีไทย
            </div>
            <div className="text-xs opacity-80">
              ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-kku">
          <NavLink href="/">หน้าแรก</NavLink>
          <NavLink href="/schedule">กำหนดการ</NavLink>
          <NavLink href="/finalists">รายชื่อผู้เข้ารอบ</NavLink>
          <NavLink href="/result">ผลการประกวด</NavLink>
          <NavLink href="/live">ถ่ายทอดสด</NavLink>
          <NavLink href="/venue">สถานที่</NavLink>
          <NavLink href="/contacts">ติดต่อ</NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-ci-plum/95 backdrop-blur-sm slide-up">
          <div className="flex flex-col px-4 py-4 gap-3 text-sm font-kku">
            <NavLink href="/" onClick={() => setOpen(false)}>หน้าแรก</NavLink>
            <NavLink href="/schedule" onClick={() => setOpen(false)}>กำหนดการ</NavLink>
            <NavLink href="/finalists" onClick={() => setOpen(false)}>รายชื่อผู้เข้ารอบ</NavLink>
            <NavLink href="/result" onClick={() => setOpen(false)}>ผลการประกวด</NavLink>
            <NavLink href="/live" onClick={() => setOpen(false)}>ถ่ายทอดสด</NavLink>
            <NavLink href="/venue" onClick={() => setOpen(false)}>สถานที่</NavLink>
            <NavLink href="/contacts" onClick={() => setOpen(false)}>ติดต่อ</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-ci-gold transition-colors duration-200 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-ci-gold after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  )
}