import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HamburgerMenu from '../components/Hamburger/Hamburger'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'growvibes',
  description: 'growvibes Technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <HamburgerMenu />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
