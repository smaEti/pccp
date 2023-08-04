import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'P.C.C.P',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl' className='overflow-x-hidden'>
      <body className={inter.className}>
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}
