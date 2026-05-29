import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">

      {/* Hero */}
      <div className="relative py-24 px-4 text-center mb-16 overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <img
            src="/images/gym-floor.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative">
          <p className="text-red-500 uppercase tracking-widest font-bold mb-2 text-sm">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            About Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Built on dedication, driven by results.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-widest font-medium mb-2 text-sm">
              Who We Are
            </p>
            <h2 className="text-3xl font-normal text-white mb-4 tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Hamza Fitness Club was founded with one goal — to make professional 
              fitness training accessible to everyone in Faisalabad. We believe 
              that with the right guidance, every person can transform their body 
              and life.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We provide personalized training, nutrition coaching, and a supportive 
              community that keeps you motivated every step of the way.
            </p>
          </div>
          <div className="bg-neutral-900 border border-white/10 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🏋️</div>
            <p className="text-gray-400 text-sm italic">
              "Your only competition is who you were yesterday."
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '500+', label: 'Members' },
            { number: '10+', label: 'Expert Trainers' },
            { number: '15+', label: 'Classes Offered' },
            { number: '5★', label: 'Rating' },
          ].map(stat => (
            <div
              key={stat.label}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-normal text-red-500 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-normal text-white uppercase mb-8 text-center tracking-tight">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💪', title: 'Dedication', desc: 'We push you to your limits while ensuring safe, progressive training.' },
              { icon: '🤝', title: 'Community', desc: 'A supportive environment where everyone motivates each other.' },
              { icon: '📈', title: 'Results', desc: 'Every program is designed with measurable outcomes in mind.' },
            ].map(value => (
              <div
                key={value.title}
                className="bg-neutral-900 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-normal text-white mb-2 tracking-tight">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-neutral-900 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-normal text-white uppercase mb-6 tracking-tight">
            Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500 uppercase text-xs tracking-wide">Address</span>
                <p className="text-white mt-1">
                  Chowk, Khatam-e-Nabuwat Plaza, Millat Rd,<br />
                  Green Town, Faisalabad, 38000, Pakistan
                </p>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-xs tracking-wide">Phone</span>
                <p className="text-white mt-1">+92 305 7050399</p>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-xs tracking-wide">Email</span>
                <p className="text-white mt-1">support@hamzafitnessclub.com</p>
              </div>
              <div>
                <span className="text-gray-500 uppercase text-xs tracking-wide">Hours</span>
                <p className="text-white mt-1">
                  Mon–Thu, Sat–Sun: 6:15–9:15 AM &amp; 4:15–10:45 PM<br />
                  Friday: Closed
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-neutral-800 rounded-lg min-h-32">
              <a
                href="https://maps.google.com/?q=Khatam-e-Nabuwat+Plaza+Millat+Rd+Green+Town+Faisalabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 text-sm font-bold uppercase"
              >
                📍 Open in Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/booking"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded font-black uppercase text-lg transition"
          >
            Start Your Journey Today
          </Link>
        </div>

      </div>
    </div>
  )
}