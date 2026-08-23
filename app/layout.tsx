import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕',
  description:
    'เว็บไซต์ข้อมูลการประกวด ค้นหาผู้เข้าประกวด กำหนดการ แผนที่ การถ่ายทอดสด และผลการแข่งขัน',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/ci/favicon.png" />
        <meta name="theme-color" content="#4b174c" />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-ci-purple to-ci-plum text-white font-sao">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

