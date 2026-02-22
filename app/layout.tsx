import './globals.css'
import Navbar from './Navbar'
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
        
        {/* 분리한 네비게이션 바 컴포넌트 삽입 */}
        <Navbar />

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