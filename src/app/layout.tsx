import GoogleAnalytics from "@/components/GoogleAnalytics"
import "../styles/style.scss"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from "next/head"

const poppins = Poppins({ subsets : ['latin'] , weight: ["400" , "500" , "700"] })

export const metadata: Metadata = {
  title: 'Work From Home',
  description: 'Here, you can leverage social media platforms to work from the comfort of your home.',
  keywords : ["work" , "home" , "free" , "social media"],
  authors : [{name : "Gurdeep Singh"}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="gxWOfw2GbQ4PsAxkoY_nnZPzpVO16xWWjhFsEdzQNTk" />  
      </Head>
      <body className={poppins.className}>{children}
      <GoogleAnalytics />
    
      </body>
    </html>
  )
}
