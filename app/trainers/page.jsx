'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer' 

// Fallback hardcoded trainers shown while DB is empty
// Replace these with real entries via POST /api/trainers
const FALLBACK_TRAINERS = [
  {
    _id: '1',
    name: 'Coach Hamza',
    specialization: ['Weight Training', 'Strength & Conditioning'],
    bio: '10+ years of experience helping clients achieve their fitness goals through personalized training programs.',
    isActive: true,
  },
  {
    _id: '2',
    name: 'Coach Ali',
    specialization: ['Cardio', 'Sports Performance'],
    bio: 'Certified personal trainer specializing in cardiovascular fitness and athletic performance.',
    isActive: true,
  },
  {
    _id: '3',
    name: 'Coach Sara',
    specialization: ['Yoga', 'Mobility & Pain Relief'],
    bio: 'Expert in mobility training and rehabilitation, helping clients move better and live pain-free.',
    isActive: true,
  },
]

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')

  useEffect(() => {
    // This runs when the page loads
    // It fetches real trainers from your MongoDB via /api/trainers
    async function fetchTrainers() {
      try {
        const res  = await fetch('/api/trainers')
        const data = await res.json()

        if (data.success && data.data.length > 0) {
          // Real data from MongoDB — use it
          setTrainers(data.data)
        } else {
          // DB is empty — show fallback trainers
          setTrainers(FALLBACK_TRAINERS)
        }
      } catch (err) {
        // API call failed — show fallback
        setTrainers(FALLBACK_TRAINERS)
        setError('Could not load live data. Showing default trainers.')
      } finally {
        setLoading(false)
      }
    }

    fetchTrainers()
  }, []) // [] means run once on page load

  return (
    <div className="min-h-screen py-16 px-4">

      {/* Hero */}
      <div className="relative py-20 px-4 text-center mb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/training.jpg"
            alt="Trainers"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative">
          <p className="text-red-500 uppercase tracking-widest font-medium mb-2 text-sm">
            Meet The Team
          </p>
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
            Our Trainers
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Expert coaches dedicated to helping you reach your fitness goals.
          </p>
        </div>
      </div>

      {/* Error notice */}
      {error && (
        <p className="text-center text-yellow-400 text-sm mb-6">{error}</p>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="text-center text-gray-400 py-20">
          <div className="text-4xl mb-4">
            <span className="icon-anim clock" aria-hidden="true"></span>
            <span className="sr-only">Loading</span>
          </div>
          <p>Loading trainers...</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map(trainer => (
            <div
              key={trainer._id}
              className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-red-500/40 transition"
            >
              {/* Trainer image placeholder */}
              <div className="h-48 bg-neutral-800 flex items-center justify-center">
                <div className="text-6xl">
                  <span className="icon-anim avatar" aria-hidden="true"></span>
                  <span className="sr-only">Trainer</span>
                </div>
              </div>

              <div className="p-6 flex flex-col items-center text-center w-full">
                <h3 className="text-xl font-normal text-white mb-2 tracking-tight">
                  {trainer.name}
                </h3>

                {/* Specializations as badges */}
                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {trainer.specialization.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-1 rounded"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {trainer.bio}
                </p>

                <Link
                  href="/booking"
                  className="block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-bold uppercase transition"
                >
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-4">Want to train with our experts?</p>
        <Link
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold uppercase transition"
        >
          Book Free Appointment
        </Link>
      </div>

    </div>
  )
}