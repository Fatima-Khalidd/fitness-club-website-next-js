import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-14 md:grid-cols-12">
          
          <div className="md:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <img src="/images/hfc-logo.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-md" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wider uppercase">
                Hamza Fitness Club
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Your destination for strength, dedication, and transformation.
            </p>
            <button className="mt-2 sm:mt-3 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-md transition duration-200 text-sm sm:text-base font-medium">
              BOOK FREE APPOINTMENT
            </button>
          </div>

          <nav className="md:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-white font-medium uppercase text-xs sm:text-sm border-b-2 border-red-600 inline-block pb-1">
              Our Studio
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link href="/aboutus" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link href="/trainers" className="hover:text-red-500 transition">Trainers</Link></li>
              <li><Link href="/classes" className="hover:text-red-500 transition">Classes</Link></li>
              <li><Link href="/pricing" className="hover:text-red-500 transition">Pricing</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-white font-medium uppercase text-xs sm:text-sm border-b-2 border-red-600 inline-block pb-1">
              Get in Touch
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm">
              <p className="text-gray-400">+92 305 7050399</p>
              <p className="text-gray-400">support@hamzafitnessclub.com</p>
              <p className="text-gray-400">Green Town, Faisalabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="text-center text-xs sm:text-sm text-gray-400 space-y-1">
            <p>© 2025 <span className="text-white font-medium">Hamza Fitness Club</span></p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}