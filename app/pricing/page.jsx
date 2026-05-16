'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const plans = {
  monthly: [
    {
      name: 'Basic',
      price: 6000,
      period: 'per month',
      popular: false,
      features: ['Standard Gym Access', 'Locker Room & Showers', 'Community Events', 'Open Gym (All Day)'],
      ctaText: 'Join Now',
      ctaLink: '/booking',
    },
    {
      name: 'Premium',
      price: 10000,
      period: 'per month',
      popular: true,
      features: ['Everything in Basic', '4 PT Sessions / Month', 'Mobility & Recovery Tools', 'Small Group Classes'],
      ctaText: 'Join Premium',
      ctaLink: '/booking',
    },
    {
      name: 'Expert',
      price: 18000,
      period: 'per month',
      popular: false,
      features: ['Unlimited PT Sessions', 'Custom Nutrition Plan', 'Priority Booking & Support', 'Athlete Recovery Suite'],
      ctaText: 'Go Expert',
      ctaLink: '/booking',
    },
  ],
  yearly: [
    {
      name: 'Basic',
      price: 4800,
      period: 'per month (billed yearly)',
      popular: false,
      features: ['Standard Gym Access', 'Locker Room & Showers', 'Community Events', 'Open Gym (All Day)'],
      ctaText: 'Join Now',
      ctaLink: '/booking',
    },
    {
      name: 'Premium',
      price: 8000,
      period: 'per month (billed yearly)',
      popular: true,
      features: ['Everything in Basic', '4 PT Sessions / Month', 'Mobility & Recovery Tools', 'Small Group Classes'],
      ctaText: 'Join Premium',
      ctaLink: '/booking',
    },
    {
      name: 'Expert',
      price: 14400,
      period: 'per month (billed yearly)',
      popular: false,
      features: ['Unlimited PT Sessions', 'Custom Nutrition Plan', 'Priority Booking & Support', 'Athlete Recovery Suite'],
      ctaText: 'Go Expert',
      ctaLink: '/booking',
    },
  ],
}

const addons = [
  { name: 'Nutrition & Habit Coaching', price: 5000, desc: 'Weekly check-ins, meal targets, and accountability to support fat loss or muscle gain.' },
  { name: 'Mobility & Pain Relief', price: 4000, desc: 'Personalized drills + recovery work to reduce stiffness and move better.' },
  { name: 'Sports Performance', price: 6500, desc: 'Speed, power, and conditioning cycles designed around your season.' },
]

const faqs = [
  { q: 'Can I pause my membership?', a: 'Yes — pause up to 2 months per year with no extra fees.' },
  { q: 'Do plans include group classes?', a: 'Premium and Expert include unlimited classes. Basic members can buy class packs anytime.' },
  { q: 'Is there a joining fee?', a: 'No joining fee during promos; otherwise a small setup fee may apply.' },
]

const stats = [
  { value: '91K+', label: 'Sessions Done' },
  { value: '84K+', label: 'Happy Clients' },
  { value: '42+', label: 'Company Support' },
  { value: '4.7+', label: 'Client Reviews' },
]

export default function PricingPage() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  const currentPlans = plans[billing]

  return (
    <main className="bg-neutral-950 text-gray-300 min-h-screen">

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gym-floor.jpg"
          alt="Hamza Fitness Club Pricing"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Pricing Plan</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight uppercase mb-5">
            Premium Fitness,<br />
            <span className="text-red-500">Transparent Pricing</span>
          </h1>
          <p className="text-gray-400 text-base mb-8">
            All plans include access to equipment, lockers, showers, and community events. Upgrade anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Book Free Appointment
            </Link>
            <Link href="/trainers" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Meet Trainers
            </Link>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Choose Package</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6">
            PKR Plans That Fit Your Routine & Goals
          </h2>
          <p className="text-gray-500 mb-8">Start with a free 30-minute consult (6–9pm). Pick a plan now or later—no pressure.</p>

          {/* Toggle */}
          <div className="inline-flex bg-neutral-800 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billing === 'monthly' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly
              <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? 'border-red-600 bg-gradient-to-b from-red-950/40 to-neutral-900 shadow-lg shadow-red-900/20'
                  : 'border-white/10 bg-neutral-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-extrabold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-white">₨ {plan.price.toLocaleString()}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{plan.period}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href={plan.ctaLink}
                  className={`text-center font-bold py-3 rounded-full transition-colors ${
                    plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.ctaText}
                </Link>
                <Link href="/booking" className="text-center text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Book Free Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-red-500 mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Advanced</span>
          <h2 className="text-3xl font-extrabold text-white mt-3">Coaching Add-ons & Specialty Tracks</h2>
          <p className="text-gray-500 mt-3">Layer in focused support where you need it most. Add-ons bill monthly and can be paused anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((a) => (
            <div key={a.name} className="bg-neutral-900 border border-white/10 rounded-2xl p-7 hover:border-red-600/40 transition-colors">
              <div className="text-2xl font-extrabold text-red-500 mb-1">₨ {a.price.toLocaleString()}</div>
              <h3 className="text-white font-bold text-lg mb-3">{a.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/booking" className="border border-red-600/50 hover:border-red-600 text-red-400 hover:text-red-300 font-bold px-8 py-3 rounded-full transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-neutral-900/60 border-y border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">Common Questions</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Got Questions? Find Answers Here</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral-800/50 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-semibold">{faq.q}</span>
                  <span className="text-red-500 text-xl ml-4 flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors inline-block">
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
