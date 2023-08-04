import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/footer'
const inter = Inter({ subsets: ['vietnamese'] })


export const metadata = {
  title: 'P.C.C.P',
  description: '',
}

export default function RootLayout({ children }) {

  return (<>
    <html lang="fa" dir='rtl' className='overflow-x-hidden p-0 m-0'>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  </>
  )
}
