import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'KLEAN KING MELBOURNE',
  description: 'Food Packaging & Cleaning Products. Free Delivery Across Victoria.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 font-sans">
        {/* 네비게이션 바 (진한 남색 포인트와 노란색 하단 테두리) */}
        <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
            
            {/* 1. 로고 영역: public/logo.png 적용 */}
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Klean King Logo" 
                width={200} 
                height={100} 
                className="object-contain"
              />
              {/* <span className="text-2xl font-black text-blue-900 tracking-tight">KLEAN KING</span> */}
            </Link>

            {/* 2. 메뉴 영역: 텍스트 + 아이콘 결합 */}
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
            
            <button className="md:hidden text-blue-900 text-3xl">≡</button>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-blue-900 text-white py-10 mt-12 border-t-4 border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-bold text-xl mb-2 text-yellow-500">KLEAN KING MELBOURNE</p>
            <p className="text-blue-100 mb-4">Food Packaging and Cleaning Products</p>
            <p className="text-sm text-blue-300">© 2011 Klean King. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}