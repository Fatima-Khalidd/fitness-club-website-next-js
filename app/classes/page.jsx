'use client'
import Footer from '@/components/Footer' 

import { useState, useEffect } from 'react'
import Link from 'next/link'

const FALLBACK_CLASSES = [
  {
    _id: '1',
    name: 'Morning Cardio Blast',
    description: 'High-intensity cardio to kickstart your day and burn maximum calories.',
    schedule: 'Mon / Wed / Fri — 6:00 AM',
    capacity: 20,
  },
  {
    _id: '2',
    name: 'Strength & Conditioning',
    description: 'Build functional strength with compound movements and progressive overload.',
    schedule: 'Tue / Thu / Sat — 7:00 AM',
    capacity: 15,
  },
  {
    _id: '3',
    name: 'Yoga & Flexibility',
    description: 'Improve mobility, reduce stress, and enhance body awareness.',
    schedule: 'Mon / Wed / Fri — 5:00 PM',
    capacity: 12,
  },
  {
    _id: '4',
    name: 'HIIT Training',
    description: 'Short bursts of intense exercise alternated with recovery periods.',
    schedule: 'Tue / Thu — 6:00 PM',
    capacity: 18,
  },
  {
    _id: '5',
    name: 'Boxing Fitness',
    description: 'Learn boxing techniques while getting an incredible full-body workout.',
    schedule: 'Sat / Sun — 8:00 AM',
    capacity: 10,
  },
  {
    _id: '6',
    name: 'Nutrition Workshop',
    description: 'Learn how to fuel your body for maximum performance and recovery.',
    schedule: 'Every Sunday — 10:00 AM',
    capacity: 25,
  },
]

const CLASS_ICONS = [
  <span className="icon-anim goal" aria-hidden="true"></span>,
  <span className="icon-anim strength" aria-hidden="true"></span>,
  <span className="icon-anim mobility" aria-hidden="true"></span>,
  <span className="icon-anim bolt" aria-hidden="true"></span>,
  <span className="icon-anim" aria-hidden="true"></span>,
  <span className="icon-anim clipboard" aria-hidden="true"></span>,
]

export default function ClassesPage() {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  useEffect(() => {
    async function fetchClasses() {
      try {
        const res  = await fetch('/api/classes')
        const data = await res.json()

        if (data.success && data.data.length > 0) {
          setClasses(data.data)
        } else {
          setClasses(FALLBACK_CLASSES)
        }
      } catch (err) {
        setClasses(FALLBACK_CLASSES)
        setError('Could not load live data. Showing default classes.')
      } finally {
        setLoading(false)
      }
    }

    fetchClasses()
  }, [])

  return (
    <div className="min-h-screen py-16 px-4">

      {/* Hero */}
      <div className="relative py-20 px-4 text-center mb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/boxing.jpg"
            alt="Classes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative">
          <p className="text-red-500 uppercase tracking-widest font-medium mb-2 text-sm">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
            Our Classes
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            From high-intensity cardio to relaxing yoga — we have something for every fitness level.
          </p>
        </div>
      </div>

      {error && (
        <p className="text-center text-yellow-400 text-sm mb-6">{error}</p>
      )}

      {loading ? (
        <div className="text-center text-gray-400 py-20">
            <div className="text-4xl mb-4">
              <span className="icon-anim clock" aria-hidden="true"></span>
              <span className="sr-only">Loading</span>
            </div>
          <p>Loading classes...</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <div
              key={cls._id}
              className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:border-red-500/40 transition flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">
                {CLASS_ICONS[index % CLASS_ICONS.length]}
              </div>

              <h3 className="text-xl font-normal text-white mb-2 tracking-tight">
                {cls.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cls.description}
              </p>

              <div className="border-t border-white/10 pt-4 space-y-2 w-full text-center">
                <div className="flex justify-center gap-4 text-sm flex-wrap">
                  <span className="text-gray-500">Schedule: <span className="text-white">{cls.schedule}</span></span>
                </div>
                <div className="flex justify-center gap-4 text-sm flex-wrap">
                  <span className="text-gray-500">Capacity: <span className="text-white">{cls.capacity} people</span></span>
                </div>
              </div>

              <Link
                href="/booking"
                className="block text-center mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-bold uppercase transition"
              >
                Book This Class
              </Link>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}