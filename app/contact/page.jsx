'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const contactInfo = [
  {
    title: 'Visit Us',
    icon: '📍',
    lines: [
      'Chowk, Khatam-e-Nabuwat Plaza,',
      'Millat Rd, Green Town,',
      'Faisalabad, 38000, Pakistan',
    ],
    link: { label: 'Open in Maps', href: 'https://maps.app.goo.gl/d7fBBXknUK5wKgsG7' },
  },
  {
    title: 'WhatsApp Us',
    icon: '💬',
    lines: ['Message us instantly on WhatsApp for memberships, class details, or quick inquiries.'],
    link: { label: 'Chat on WhatsApp', href: 'https://wa.me/923057050399' },
  },
  {
    title: 'Email Us',
    icon: '✉️',
    lines: ['For inquiries, collaborations, or support, send us an email anytime.'],
    link: { label: 'support@hamzafitnessclub.com', href: 'mailto:support@hamzafitnessclub.com' },
  },
  {
    title: 'Working Hours',
    icon: '🕐',
    lines: [
      'Mon – Sat: 6:15–9:15 am | 4:15–10:45 pm',
      'Sunday: 6:15–9:15 am | 4:15–10:45 pm',
      'Friday: Closed',
    ],
    link: { label: 'Book a Session', href: '/booking' },
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')

    try {
      // Connect this to your actual API route — e.g. POST /api/contact
      // For now it simulates a successful submission
      await new Promise((res) => setTimeout(res, 1200))
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-neutral-950 text-gray-300 min-h-screen">

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/gym-floor.jpg"
          alt="Contact Hamza Fitness Club"
          fill
          className="object-cover brightness-[0.25]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Have questions about memberships, training, or timings?<br />
            Reach out — we're here to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactInfo.map((c, i) => (
            <div key={i} className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-red-600/40 transition-colors">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
              <div className="space-y-1 mb-5">
                {c.lines.map((line, j) => (
                  <p key={j} className={`text-sm ${line === 'Friday: Closed' ? 'text-red-400' : 'text-gray-400'}`}>
                    {line}
                  </p>
                ))}
              </div>
              <a
                href={c.link.href}
                target={c.link.href.startsWith('http') ? '_blank' : undefined}
                rel={c.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block bg-red-600/20 hover:bg-red-600 border border-red-600/40 hover:border-red-600 text-red-400 hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
              >
                {c.link.label}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-neutral-900 border border-white/10 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Send Us a Message</h2>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-white font-bold text-xl mb-2">Message Received!</h3>
              <p className="text-gray-400 text-sm mb-6">
                Thank you for contacting Hamza Fitness Club. We'll respond within 24 hours.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-neutral-800 border border-white/10 focus:border-red-600/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-neutral-800 border border-white/10 focus:border-red-600/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Membership inquiry"
                  className="w-full bg-neutral-800 border border-white/10 focus:border-red-600/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-neutral-800 border border-white/10 focus:border-red-600/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">Please fill in all required fields (Name, Email, Message).</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-base"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
