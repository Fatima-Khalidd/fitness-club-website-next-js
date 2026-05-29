'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate sending — replace with real email API later
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen py-16 px-4">

      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-red-500 uppercase tracking-widest font-medium mb-2 text-sm">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-normal text-white tracking-tight">Our Info</h2>

          {[
            { icon: '📍', label: 'Address', value: 'Chowk, Khatam-e-Nabuwat Plaza, Millat Rd, Green Town, Faisalabad' },
            { icon: '📞', label: 'Phone', value: '+92 305 7050399' },
            { icon: '✉️', label: 'Email', value: 'support@hamzafitnessclub.com' },
            { icon: '🕐', label: 'Hours', value: 'Mon–Thu, Sat–Sun: 6:15–9:15 AM & 4:15–10:45 PM\nFriday: Closed' },
          ].map(item => (
            <div
              key={item.label}
              className="flex gap-4 bg-neutral-900 border border-white/10 rounded-xl p-5"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-white text-sm whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900 border border-white/10 rounded-xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-sm">
                Thanks {name}! We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSent(false); setName(''); setEmail(''); setMessage('') }}
                className="mt-6 text-red-500 text-sm underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-normal mb-4 tracking-tight">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full bg-neutral-950 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-red-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-neutral-950 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-red-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className="w-full bg-neutral-950 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-red-500/60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white py-3 rounded font-bold uppercase text-sm transition"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  )
}