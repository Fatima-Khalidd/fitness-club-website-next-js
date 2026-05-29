import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Hamza Fitness Club',
  description: 'Book appointments at Hamza Fitness Club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}