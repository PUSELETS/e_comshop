import { Toaster } from 'react-hot-toast';
import { Layout } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from '@/context/StateContext'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />  
      </Head>
      <StateContext>
        <body className={inter.className}>
          <Layout>
            <Toaster />
            <main className="main-container">{children}</main>
          </Layout>
        </body>
      </StateContext>
    </html>
  )
}
