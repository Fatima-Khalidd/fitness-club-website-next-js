import Link from 'next/link'
import Image from 'next/image'

const highlights = [
  'Personalized training programs',
  'Strength & conditioning',
  'Nutrition guidance',
  'Flexible class schedules',
  'Community events',
  'Progress tracking',
]

const pillars = [
  {
    title: 'Our Vision',
    icon: '👁',
    text: 'To inspire healthier lifestyles by building stronger bodies and empowering minds through fitness.',
  },
  {
    title: 'Our Mission',
    icon: '🎯',
    text: 'To provide expert training, personalized programs, and a supportive community that helps every member achieve their fitness goals.',
  },
  {
    title: 'Our Motto',
    icon: '🔥',
    text: 'Train hard, stay consistent, and become stronger every day — inside and out.',
  },
]

const stats = [
  { value: '91K+', label: 'Projects Done' },
  { value: '84K+', label: 'Happy Clients' },
  { value: '42+', label: 'Company Support' },
  { value: '4.7+', label: 'Client Reviews' },
]

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-gray-300 min-h-screen">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gym-floor.jpg"
          alt="Hamza Fitness Club team and facility"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase mb-5">
            Stronger Together at<br />
            <span className="text-red-500">Hamza Fitness Club</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            A community-first gym in Faisalabad focused on smart training, real results, and a supportive culture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#our-story" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Our Story
            </a>
            <a href="#team" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="our-story" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Your Ultimate Fitness and Wellness Destination.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We build stronger bodies and stronger communities. Our expert coaches, supportive culture, and
              top-tier facilities help beginners and athletes alike reach their full potential.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-red-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:+923057050399"
              className="inline-flex items-center gap-3 bg-neutral-800 border border-white/10 hover:border-red-600/50 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <span className="text-red-500">📞</span>
              Customer Support · +92 305 7050399
            </a>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/man who we are.svg"
              alt="Athlete"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision / Mission / Motto */}
      <section className="py-20 px-6 bg-neutral-900/50 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Professional Fitness</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-white/10 rounded-2xl p-8 hover:border-red-600/40 transition-colors"
              >
                <div className="text-4xl mb-5">{p.icon}</div>
                <h3 className="text-white font-extrabold text-xl mb-4">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Address Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Find Us</span>
            <h2 className="text-2xl font-extrabold text-white mt-3 mb-4">Visit Hamza Fitness Club</h2>
            <p className="text-gray-400 mb-2">📍 Chowk, Khatam-e-Nabuwat Plaza, Millat Rd, Green Town, Faisalabad, 38000, Pakistan</p>
            <p className="text-gray-400 mb-2">📧 support@hamzafitnessclub.com</p>
            <p className="text-gray-400 mb-6">📞 +92 305 7050399</p>
            <div className="text-sm text-gray-500 space-y-1 mb-6">
              <p>Mon – Sat: 6:15–9:15 am | 4:15–10:45 pm</p>
              <p>Sunday: 6:15–9:15 am | 4:15–10:45 pm</p>
              <p className="text-red-400">Friday: Closed</p>
            </div>
            <Link
              href="https://maps.app.goo.gl/d7fBBXknUK5wKgsG7"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Open in Maps
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🏋️</div>
            <p className="text-gray-400 text-sm max-w-xs">
              Come experience Faisalabad's most community-focused fitness club. Walk-ins welcome during open hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-neutral-900/60 border-t border-white/5">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-400 mb-8">Book a free consultation and start training with the best in Faisalabad.</p>
        <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors inline-block">
          Book Free Appointment
        </Link>
      </section>

    </main>
  )
}
