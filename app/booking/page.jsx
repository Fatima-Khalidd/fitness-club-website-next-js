'use client'

import { useState } from 'react'
import Link from 'next/link'

// These are the goal options from your original booking.html
const CONCERNS = [
  { value: 'Weight Loss / Fat Loss', icon: '🔥' },
  { value: 'Muscle Gain & Strength', icon: '💪' },
  { value: 'Mobility & Pain Relief', icon: '🧘' },
  { value: 'Sports Performance', icon: '⚡' },
  { value: 'General Fitness & Cardio', icon: '❤️' },
  { value: 'Nutrition & Habit Coaching', icon: '📋' },
  { value: 'Virtual Coaching', icon: '💻' },
]

// Time slots from 6:00pm to 9:00pm, every 30 minutes
const TIME_SLOTS = [
  '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM',
  '9:00 PM',
]

export default function BookingPage() {

  // ─── STATE ───────────────────────────────────────────────
  // Each piece of form data has its own state variable
  const [concerns, setConcerns]   = useState([])   // array of selected goals
  const [notes, setNotes]         = useState('')
  const [date, setDate]           = useState('')
  const [time, setTime]           = useState('')
  const [name, setName]           = useState('')
  const [phone, setPhone]         = useState('')
  const [email, setEmail]         = useState('')
  const [agreed, setAgreed]       = useState(false)

  // These control what the user sees after submitting
  const [loading, setLoading]     = useState(false)
  const [success, setSuccess]     = useState(false)
  const [error, setError]         = useState('')

  // ─── CONCERN TOGGLE ──────────────────────────────────────
  // When user clicks a goal button, add or remove it from the array
  function toggleConcern(value) {
    setConcerns(prev =>
      prev.includes(value)
        ? prev.filter(c => c !== value)   // remove if already selected
        : [...prev, value]                // add if not selected
    )
  }

  // ─── FORM SUBMIT ─────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()  // stops page from reloading on submit

    // Basic validation
    if (concerns.length === 0) {
      setError('Please select at least one goal.')
      return
    }
    if (!date || !time) {
      setError('Please select a date and time.')
      return
    }
    if (!name || !phone || !email) {
      setError('Please fill in all your details.')
      return
    }
    if (!agreed) {
      setError('Please agree to the terms.')
      return
    }

    setError('')      // clear any old errors
    setLoading(true)  // show loading state on button

    try {
      // This is the fetch call to YOUR API route
      // Same URL as what you tested in Thunder Client
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, date, time, concerns, notes }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)  // show success message
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Could not connect to server. Please try again.')
    } finally {
      setLoading(false)  // always remove loading state
    }
  }

  // ─── SUCCESS SCREEN ──────────────────────────────────────
  // Show this instead of the form after successful booking
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-neutral-900 border border-white/10 rounded-xl p-10 text-center max-w-md w-full">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-2">Appointment Booked!</h2>
          <p className="text-gray-400 mb-6">
            We've received your booking for <strong className="text-white">{date}</strong> at <strong className="text-white">{time}</strong>.
            We'll confirm shortly.
          </p>
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold uppercase inline-block transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // ─── MAIN FORM ───────────────────────────────────────────
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-6">

        {/* ── LEFT: FORM ── */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* STEP 1 — Goals */}
          <section className="bg-neutral-900 border border-white/10 rounded-xl p-6">
            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              <span className="font-black text-red-500">Step 1</span> of 3
            </div>
            <h2 className="text-xl font-bold mb-4">What's your main goal?</h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {CONCERNS.map(concern => (
                <button
                  key={concern.value}
                  type="button"
                  onClick={() => toggleConcern(concern.value)}
                  className={`flex items-center gap-3 p-3 rounded-lg border text-left transition ${
                    concerns.includes(concern.value)
                      ? 'border-red-500 bg-red-500/10 text-white'
                      : 'border-white/10 bg-neutral-800 text-gray-300 hover:border-white/30'
                  }`}
                >
                  <span className="text-xl">{concern.icon}</span>
                  <span className="text-sm font-medium">{concern.value}</span>
                </button>
              ))}
            </div>

            {/* Notes */}
            <div className="mt-4">
              <label className="block text-xs text-gray-400 mb-1 uppercase">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={3}
                placeholder="Share any details, injuries, or preferences"
                className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:border-red-500/60 text-white"
              />
            </div>
          </section>

          {/* STEP 2 — Date & Time */}
          <section className="bg-neutral-900 border border-white/10 rounded-xl p-6">
            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              <span className="font-black text-red-500">Step 2</span> of 3
            </div>
            <h2 className="text-xl font-bold mb-4">Pick Date &amp; Time</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Date picker */}
              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-red-500/60 text-white"
                />
              </div>

              {/* Time dropdown */}
              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">
                  Time — Free 30-min slot
                </label>
                <select
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-red-500/60 text-white"
                >
                  <option value="" disabled>Select a time slot</option>
                  {TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-400">
                  Free 30-minute appointment between 6:00 and 9:00 pm.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 3 — Personal Details */}
          <section className="bg-neutral-900 border border-white/10 rounded-xl p-6">
            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              <span className="font-black text-red-500">Step 3</span> of 3
            </div>
            <h2 className="text-xl font-bold mb-4">Your Details</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:border-red-500/60 text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1 uppercase">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="03xx xxxxxxx"
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:border-red-500/60 text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-gray-400 mb-1 uppercase">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm placeholder-gray-500 outline-none focus:border-red-500/60 text-white"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="mt-4 flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="agree" className="text-sm text-gray-300">
                I agree to the cancellation policy and terms.
              </label>
            </div>

            {/* Error message */}
            {error && (
              <p className="mt-3 text-sm text-red-400">{error}</p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed text-white py-3 rounded font-bold uppercase transition"
            >
              {loading ? 'Booking...' : 'Confirm Appointment'}
            </button>
          </section>
        </form>

        {/* ── RIGHT: LIVE SUMMARY ── */}
        <aside className="space-y-5">
          <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
            <div className="px-6 py-3 bg-red-600 text-white font-bold text-lg">
              Summary
            </div>
            <div className="p-6 space-y-4">

              {/* Selected goals */}
              <div>
                <span className="text-gray-400 block mb-2 text-sm">Goal(s)</span>
                {concerns.length === 0 ? (
                  <p className="text-gray-500 text-sm">None selected</p>
                ) : (
                  <ul className="space-y-1">
                    {concerns.map(c => (
                      <li key={c} className="text-sm text-white flex items-center gap-2">
                        <span className="text-red-500">✓</span> {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <hr className="border-white/10" />

              {/* Date and time */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Date</span>
                <strong className="text-white">{date || '—'}</strong>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Time</span>
                <strong className="text-white">{time || '—'}</strong>
              </div>

              <hr className="border-white/10" />

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Consultation</span>
                <strong className="text-green-400">FREE</strong>
              </div>

              <p className="text-xs text-gray-400">
                You'll pay at the club for any sessions after the free consultation.
              </p>
            </div>
          </div>

          {/* Help box */}
          <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold mb-3 text-white">Need help?</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 +92 305 7050399</p>
              <p>✉️ support@hamzafitnessclub.com</p>
              <p>Cancel up to 12 hours before your appointment.</p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}