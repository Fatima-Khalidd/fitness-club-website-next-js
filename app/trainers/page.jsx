import Link from 'next/link'
import Image from 'next/image'

const trainers = [
  {
    name: 'Alexander Thornton',
    role: 'Founder',
    specialties: ['Strength & Conditioning', 'Program Design', 'Athlete Development'],
    bio: 'With over 12 years in elite fitness coaching, Alexander built Hamza Fitness Club from the ground up with a mission to transform lives through science-backed training.',
    img: '/images/male user.jpg',
    gender: 'male',
  },
  {
    name: 'Nathaniel Brooks',
    role: 'Co-Founder',
    specialties: ['Nutrition Coaching', 'Fat Loss', 'Mobility'],
    bio: 'Nathaniel combines expertise in sports nutrition and movement science to design programs that get sustainable, long-term results for every member.',
    img: '/images/female user.jpg',
    gender: 'female',
  },
  {
    name: 'Carolina Roberts',
    role: 'Boxing & Conditioning Trainer',
    specialties: ['Boxing', 'HIIT', 'Explosive Power'],
    bio: 'Carolina brings high energy and technical precision to every session. Her boxing-inspired conditioning classes are the most popular in the club.',
    img: '/images/boxing.jpg',
    gender: 'female',
  },
  {
    name: 'Isabella Hartman',
    role: 'Yoga & Wellness Trainer',
    specialties: ['Yoga', 'Mindfulness', 'Recovery'],
    bio: 'Isabella creates a calm, focused environment for members looking to improve flexibility, reduce stress, and build a strong mind-body connection.',
    img: '/images/Yoga.jpg',
    gender: 'female',
  },
]

const stats = [
  { value: '91K+', label: 'Sessions Coached' },
  { value: '84K+', label: 'Happy Members' },
  { value: '42+', label: 'Company Support' },
  { value: '4.7+', label: 'Avg Rating' },
]

export default function TrainersPage() {
  return (
    <main className="bg-neutral-950 text-gray-300 min-h-screen">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gym-floor.jpg"
          alt="Hamza Fitness Club Trainers"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-wide mb-5">
            Meet the Professionals<br />
            <span className="text-red-500">Behind Every Transformation</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Our certified trainers bring unmatched expertise, energy, and focus to every session.
            They coach, motivate, and personalize your fitness journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#team" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Explore Our Team
            </a>
            <Link href="/booking" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Book a Free Session
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers Grid */}
      <section id="team" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Expert Trainers</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Dedicated to Your Success
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <div
              key={i}
              className="group bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {trainer.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{trainer.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{trainer.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((s) => (
                    <span key={s} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-neutral-900/60 border-y border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Join Our Fitness Community
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Train with expert coaches committed to your transformation.
          </p>
          <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors inline-block">
            Join Now — Free Session
          </Link>
        </div>
      </section>

    </main>
  )
}
