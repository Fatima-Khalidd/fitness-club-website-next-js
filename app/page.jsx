import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/gym-floor.jpg"
            alt="Gym Floor"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-red-500 uppercase tracking-[0.3em] font-bold mb-4 text-sm">
            Train Hard · Get Stronger
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
            Hamza<br />
            <span className="text-red-500">Fitness Club</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Your destination for strength, dedication, and transformation. 
            Push your limits and become the best version of yourself.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-base font-bold uppercase tracking-wide rounded transition duration-300"
          >
            Book Free Appointment
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Trainers</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional coaches dedicated to helping you reach your fitness goals.
            </p>
          </div>

          <div className="p-6">
            <div className="text-4xl mb-4">🏋️</div>
            <h3 className="text-xl font-bold text-white mb-2">Modern Equipment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              State-of-the-art gym equipment for every type of workout.
            </p>
          </div>

          <div className="p-6">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Book a free 15-minute appointment and get a personalized plan.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-red-100 mb-8 text-lg">
          Book your free consultation today. No commitment required.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-base font-black uppercase tracking-wide rounded transition"
        >
          Book Free Appointment
        </Link>
      </section>

    </div>
  )
}