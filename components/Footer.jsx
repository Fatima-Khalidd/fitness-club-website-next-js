import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#d1d5db' }}>
      
      {/* Main footer content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 32px' }}>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(12, 1fr)' }}>
          
          {/* Brand Section */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/images/hfc-logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '6px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Hamza Fitness Club
              </h2>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
              Your destination for strength, dedication, and transformation.
            </p>
            <button style={{ marginTop: '8px', backgroundColor: '#dc2626', color: 'white', padding: '10px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
              BOOK FREE APPOINTMENT
            </button>
          </div>

          {/* Our Studio Links */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ color: 'white', fontWeight: '500', fontSize: '14px', borderBottom: '2px solid #dc2626', display: 'inline-block', paddingBottom: '4px', marginBottom: '16px' }}>
              Our Studio
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', listStyle: 'none', padding: 0 }}>
              <li><Link href="/aboutus" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/trainers" style={{ color: '#9ca3af', textDecoration: 'none' }}>Trainers</Link></li>
              <li><Link href="/classes" style={{ color: '#9ca3af', textDecoration: 'none' }}>Classes</Link></li>
              <li><Link href="/pricing" style={{ color: '#9ca3af', textDecoration: 'none' }}>Pricing</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div style={{ gridColumn: 'span 3' }}>
            <h3 style={{ color: 'white', fontWeight: '500', fontSize: '14px', borderBottom: '2px solid #dc2626', display: 'inline-block', paddingBottom: '4px', marginBottom: '16px' }}>
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <p style={{ color: '#9ca3af', margin: 0 }}>+92 305 7050399</p>
              <p style={{ color: '#9ca3af', margin: 0 }}>support@hamzafitnessclub.com</p>
              <p style={{ color: '#9ca3af', margin: 0 }}>Green Town, Faisalabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 32px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#9ca3af' }}>
            <p style={{ margin: 0 }}>© 2025 <span style={{ color: 'white', fontWeight: '500' }}>Hamza Fitness Club</span></p>
            <p style={{ margin: 0 }}>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}