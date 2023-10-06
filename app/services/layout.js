import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
