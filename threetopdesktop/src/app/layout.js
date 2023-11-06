import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav';
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '#Top Travels',
  description: 'Threetop travel pwa site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className='flex'>
         <div className='flex-auto'>
          {children}
         </div>
        </div>
      </body>
    </html>
  )
}
