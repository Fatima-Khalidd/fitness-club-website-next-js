import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/gym-floor.jpg"
            alt="Gym"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative text-center px-4">
          <p className="text-red-500 uppercase tracking-widest font-bold mb-4">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase">
            Hamza Fitness Club
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your destination for strength, dedication, and transformation.
          </p>
          <Link
            href="/booking"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold uppercase rounded inline-block transition"
          >
            Book Free Appointment
          </Link>
        </div>
      </section>

    </div>
  )
}