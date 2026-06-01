import Link from 'next/link'
import Footer from '@/components/Footer' 

const PLANS = [
  {
    name: 'Basic',
    price: '5,000',
    period: 'month',
    color: 'border-white/20',
    badge: '',
    features: [
      'Access to gym floor',
      'Basic equipment use',
      'Locker room access',
      '6 AM – 10 PM access',
      '1 free consultation',
    ],
    notIncluded: [
      'Personal trainer sessions',
      'Group classes',
      'Nutrition coaching',
    ],
  },
  {
    name: 'Standard',
    price: '8,500',
    period: 'month',
    color: 'border-red-500',
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      '4 group classes/month',
      '2 trainer sessions/month',
      'Nutrition guidance',
      'Progress tracking',
    ],
    notIncluded: [
      'Unlimited classes',
      'Daily trainer access',
    ],
  },
  {
    name: 'Premium',
    price: '14,000',
    period: 'month',
    color: 'border-yellow-500/60',
    badge: 'Best Value',
    features: [
      'Everything in Standard',
      'Unlimited group classes',
      'Daily trainer access',
      'Custom meal plan',
      'Priority booking',
      '24/7 gym access',
    ],
    notIncluded: [],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen py-16 px-4">

      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-red-500 uppercase tracking-widest font-medium mb-2 text-sm">
          Simple Pricing
        </p>
        <h1 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
          Membership Plans
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Choose the plan that fits your goals. All plans include a free 30-minute consultation.
        </p>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {PLANS.map(plan => (
          <div
            key={plan.name}
            className={`bg-neutral-900 border-2 ${plan.color} rounded-xl p-8 relative flex flex-col`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="mb-6 text-center">
              <h3 className="text-xl font-normal text-white mb-4 uppercase tracking-tight">
                {plan.name}
              </h3>
              <div className="flex items-end justify-center gap-1">
                <span className="text-gray-400 text-sm">PKR</span>
                <span className="text-4xl font-normal text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm mb-1">/{plan.period}</span>
              </div>
            </div>

            {/* Features included */}
            <ul className="space-y-3 mb-6 flex-1 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex-shrink-0">✕</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/booking"
              className={`block text-center py-3 rounded font-bold uppercase text-sm transition ${
                plan.badge === 'Most Popular'
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* Free consultation note */}
      <div className="max-w-2xl mx-auto text-center bg-neutral-900 border border-white/10 rounded-xl p-8">
        <div className="text-4xl mb-4">
          <span className="icon-anim goal" aria-hidden="true"></span>
          <span className="sr-only">Target</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Not sure which plan?
        </h3>
        <p className="text-gray-400 mb-6">
          Book a free 30-minute consultation. Our trainers will assess your goals 
          and recommend the best plan for you — no pressure, no commitment.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold uppercase transition"
        >
          Book Free Consultation
        </Link>
      </div>

    </div>
  )
}