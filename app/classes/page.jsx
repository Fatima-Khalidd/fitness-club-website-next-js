import Link from 'next/link'
import Image from 'next/image'

const classes = [
  {
    id: 1,
    name: 'Personal Training',
    tag: 'Strength',
    description: 'Build muscle, improve endurance, and enhance overall strength with 1-on-1 expert guidance.',
    duration: '60 min',
    level: 'All Levels',
    icon: '🏋️',
    color: 'from-red-900/60 to-red-950/80',
    border: 'border-red-700/40',
  },
  {
    id: 2,
    name: 'HIIT & Cardio',
    tag: 'Cardio',
    description: 'High-intensity interval training for maximum fat loss, endurance, and calorie burn.',
    duration: '45 min',
    level: 'Intermediate',
    icon: '⚡',
    color: 'from-orange-900/60 to-orange-950/80',
    border: 'border-orange-700/40',
  },
  {
    id: 3,
    name: 'Yoga & Mindfulness',
    tag: 'Wellness',
    description: 'Improve balance, flexibility, and mental relaxation through guided yoga sessions.',
    duration: '60 min',
    level: 'Beginner',
    icon: '🧘',
    color: 'from-emerald-900/60 to-emerald-950/80',
    border: 'border-emerald-700/40',
  },
  {
    id: 4,
    name: 'Boxing & Conditioning',
    tag: 'Performance',
    description: 'Enhance speed, agility, and explosive power with boxing drills and conditioning work.',
    duration: '60 min',
    level: 'Advanced',
    icon: '🥊',
    color: 'from-blue-900/60 to-blue-950/80',
    border: 'border-blue-700/40',
  },
  {
    id: 5,
    name: 'Group Fitness',
    tag: 'Community',
    description: 'Fun, high-energy workouts with community motivation — never train alone again.',
    duration: '50 min',
    level: 'All Levels',
    icon: '🔥',
    color: 'from-purple-900/60 to-purple-950/80',
    border: 'border-purple-700/40',
  },
]

const benefits = [
  { title: '60-Min In-Person Session', desc: 'Personalized coaching to strengthen your technique and reach your goals faster.' },
  { title: 'Virtual Training Session', desc: 'Join live or on-demand workouts from anywhere with real-time trainer feedback.' },
  { title: 'Flexible Scheduling', desc: 'Choose morning, midday, or evening sessions that fit your daily routine.' },
]

const stats = [
  { value: '91K+', label: 'Sessions Done' },
  { value: '84K+', label: 'Happy Members' },
  { value: '42+', label: 'Expert Trainers' },
  { value: '4.7+', label: 'Avg Rating' },
]

const reviews = [
  { name: 'Pakeeza Hassan', city: 'Faisalabad', gender: 'female', text: 'In 8 weeks I dropped 6kg and hit my first unassisted pull-up. Coaches actually track my progress weekly — feels like a team behind me!' },
  { name: 'Ahmed Raza', city: 'Faisalabad', gender: 'male', text: 'Variety is insane — HIIT, strength, boxing. I never get bored and my stamina\'s never been better.' },
  { name: 'Ali', city: 'Faisalabad', gender: 'male', text: '24/7 access, spotless equipment, and trainers who actually check my form. Couldn\'t ask for more.' },
  { name: 'Sara Khan', city: 'Lahore', gender: 'female', text: 'The programming keeps me consistent. I\'ve never felt stronger.' },
]

export default function ClassesPage() {
  return (
    <main className="bg-neutral-950 text-gray-300 min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gym-floor.jpg"
          alt="Hamza Fitness Club classes"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Our Classes</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase tracking-wide mb-6">
            Build Strength.<br /> Boost Endurance.<br />
            <span className="text-red-500">Feel Amazing.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Every class is led by certified coaches who care about your technique and results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              View Pricing
            </Link>
            <Link href="/booking" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
            Fitness Classes for Every Skill Level
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className={`bg-gradient-to-br ${cls.color} border ${cls.border} rounded-2xl p-7 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{cls.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                {cls.tag}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{cls.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{cls.description}</p>
              <div className="flex gap-4 text-xs text-gray-400">
                <span className="bg-white/10 px-3 py-1 rounded-full">⏱ {cls.duration}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">📊 {cls.level}</span>
              </div>
            </div>
          ))}
          {/* CTA card */}
          <div className="border border-red-600/50 bg-red-600/10 rounded-2xl p-7 flex flex-col items-center justify-center text-center hover:bg-red-600/20 transition-colors">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Not Sure Where to Start?</h3>
            <p className="text-gray-400 text-sm mb-6">Book a free consultation and we'll match you to the perfect class.</p>
            <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-20 bg-neutral-900/60 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Why Train With Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Experience the Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {benefits.map((b, i) => (
              <div key={i} className="bg-neutral-800/50 border border-white/10 rounded-2xl p-7">
                <div className="w-10 h-10 bg-red-600/20 border border-red-600/40 rounded-full flex items-center justify-center text-red-400 font-bold text-lg mb-5">
                  {i + 1}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          {/* Key Benefits */}
          <div className="bg-neutral-800/40 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-5">Key Benefits</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Proven results & success stories',
                'Expert trainers & personalized coaching',
                'Supportive fitness community',
                'State-of-the-art facilities',
                'Flexible membership plans',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-neutral-900/60 border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Member Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Real Results from Real Members</h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-bold text-white">4.9</span>
              <span>/ Based on 12 reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-neutral-800/50 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-700 overflow-hidden relative flex-shrink-0">
                    <Image
                      src={r.gender === 'female' ? '/images/female user.jpg' : '/images/male user.jpg'}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs">{r.city}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic">"{r.text}"</p>
                <div className="text-yellow-400 text-xs mt-3">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Join Hamza Fitness Club?
          </h2>
          <p className="text-gray-400 mb-8">
            Start with a free 30-minute consultation. No pressure, no commitment — just results.
          </p>
          <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors inline-block">
            Book Free Appointment
          </Link>
        </div>
      </section>

    </main>
  )
}
