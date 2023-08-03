import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'P.C.C.P',
  description: '',
}

export default function RootLayout({ children }) {
  return (<>
    <html lang="fa">
      <body className={inter.className}>
        <Navbar />
      <main>
        {children}
      </main>
      </body>
    </html>
  </>
  )
}
