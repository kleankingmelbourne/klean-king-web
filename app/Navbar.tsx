"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-yellow-500">
      {/* 상대 위치(relative)와 배경색을 주어 메뉴가 아래로 깔리더라도 헤더가 위에 있도록 설정 */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center bg-white relative z-20">
        
        {/* 1. 로고 영역 */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Klean King Logo" 
            width={200} 
            height={80} 
            className="object-contain"
          />
        </Link>

        {/* 2. 데스크탑 메뉴 영역 */}
        <nav className="hidden md:flex gap-8 font-bold text-blue-900">
          <Link href="/" className="flex items-center gap-2 hover:text-yellow-500 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </Link>
          <Link href="/catalogue" className="flex items-center gap-2 hover:text-yellow-500 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            Catalogue
          </Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-500 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact
          </Link>
        </nav>
        
        {/* 3. 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-blue-900 text-3xl p-2 focus:outline-none transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '≡'}
        </button>
      </div>

      {/* 4. 모바일 드롭다운 메뉴 창 (스르륵 내려오는 애니메이션 적용) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out z-10 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col font-bold text-blue-900">
          <Link 
            href="/" 
            className="p-4 border-b border-slate-100 hover:bg-slate-50 hover:text-yellow-500 flex items-center gap-3 transition-colors"
            onClick={() => setIsMenuOpen(false)} 
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Home
          </Link>
          <Link 
            href="/catalogue" 
            className="p-4 border-b border-slate-100 hover:bg-slate-50 hover:text-yellow-500 flex items-center gap-3 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            Catalogue
          </Link>
          <Link 
            href="/contact" 
            className="p-4 hover:bg-slate-50 hover:text-yellow-500 flex items-center gap-3 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}