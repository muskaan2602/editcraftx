import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './BookingCTA.css'

export default function BookingCTA() {
  const [ref, inView] = useScrollAnimation(0.2)

  return (
    <section className="booking-cta">
      <div className="container">
        <div
          ref={ref}
          className={`cta-box animate-fade-up ${inView ? 'in-view' : ''}`}
        >
          <div className="cta-glow"></div>
          <p className="section-label">Ready to Start?</p>
          <h2 className="cta-title">Let's Create Something<br />Extraordinary Together</h2>
          <p className="cta-subtitle">
            Tell us about your project and we'll get back to you within 24 hours with a custom quote.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/portfolio" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
