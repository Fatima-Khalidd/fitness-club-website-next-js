import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-gray-300 pt-12 pb-12">
      {/* Increased from py-14 to py-20 for more top/bottom spacing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-12">
        
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/hfc-logo.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-md" />
            <h2 className="text-2xl font-extrabold text-white tracking-wider uppercase">
              Hamza Fitness Club
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your destination for strength, dedication, and transformation.
          </p>
          {/* Added button for better spacing */}
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition">
            BOOK FREE APPOINTMENT
          </button>
        </div>

        {/* Links */}
        <nav className="md:col-span-2">
          <h3 className="text-white font-medium uppercase text-sm mb-3 border-b-2 border-red-600 inline-block pb-1">
            Our Studio
          </h3>
          <ul className="space-y-3 text-sm"> {/* Increased space-y-2 to space-y-3 */}
            <li><Link href="/aboutus" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link href="/trainers" className="hover:text-red-500 transition">Trainers</Link></li>
            <li><Link href="/classes" className="hover:text-red-500 transition">Classes</Link></li>
            <li><Link href="/pricing" className="hover:text-red-500 transition">Pricing</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-3">
          <h3 className="text-white font-medium uppercase text-sm mb-3 border-b-2 border-red-600 inline-block pb-1">
            Get in Touch
          </h3>
          <div className="space-y-3 text-sm"> {/* Increased space-y-2 to space-y-3 */}
            <p className="text-gray-400">+92 305 7050399</p>
            <p className="text-gray-400">support@hamzafitnessclub.com</p>
            <p className="text-gray-400">Green Town, Faisalabad, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Increased bottom padding from py-6 to py-10 and added line spacing */}
      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-10">
        <div className="max-w-7xl mx-auto space-y-1">
          <p>
            © 2025 <span className="text-white font-medium">Hamza Fitness Club</span>.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}