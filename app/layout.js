import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JP Caravans',
  description: 'Dein Profi für Campingnachrüstungen',
  name: "google-site-verification",
  content: "F1hmPNsQbG0T5w5diUh6oWUubUy03V34bWcfUc0_7is"
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <Head>
        <meta
          name="google-site-verification"
          content="F1hmPNsQbG0T5w5diUh6oWUubUy03V34bWcfUc0_7is"
        />
        <title>JP Caravans dein Profi für Nachrüstungen von Movern Solaranlagen und mehr</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
