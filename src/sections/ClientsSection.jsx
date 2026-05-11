import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './ClientsSection.css'

const clients = [
  { name: 'SoundWave Records', initials: 'SW' },
  { name: 'Apex Brands', initials: 'AB' },
  { name: 'Nova Films', initials: 'NF' },
  { name: 'Pulse Media', initials: 'PM' },
  { name: 'Crest Studios', initials: 'CS' },
  { name: 'Orbit Creative', initials: 'OC' },
  { name: 'Zenith Agency', initials: 'ZA' },
  { name: 'Spark Digital', initials: 'SD' },
]

const testimonials = [
  {
    quote: "EditCraftX transformed our raw footage into a cinematic masterpiece. The attention to detail and creative vision they brought to our music video was beyond anything we expected.",
    name: "Alex Rivera",
    role: "Music Artist",
    initials: "AR",
  },
  {
    quote: "We've worked with many editors, but EditCraftX stands out for their speed, quality, and communication. Our brand film got 2M views in the first week.",
    name: "Sarah Chen",
    role: "Marketing Director, Apex Brands",
    initials: "SC",
  },
  {
    quote: "Our wedding film made us cry happy tears every time we watch it. They captured every emotion perfectly. Worth every penny.",
    name: "James & Priya",
    role: "Wedding Clients",
    initials: "JP",
  },
]

export default function ClientsSection() {
  const [headerRef, headerInView] = useScrollAnimation()
  const [logosRef, logosInView] = useScrollAnimation(0.1)
  const [testimonialsRef, testimonialsInView] = useScrollAnimation(0.1)

  return (
    <section className="clients-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`clients-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Trusted By</p>
          <h2 className="section-title">Brands & Creators<br />We've Worked With</h2>
        </div>

        <div
          ref={logosRef}
          className={`clients-logos animate-fade-up ${logosInView ? 'in-view' : ''}`}
        >
          {clients.map((c, i) => (
            <div className="client-logo" key={i} title={c.name}>
              <span className="client-initials">{c.initials}</span>
              <span className="client-name">{c.name}</span>
            </div>
          ))}
        </div>

        <div
          ref={testimonialsRef}
          className={`testimonials-grid animate-fade-up ${testimonialsInView ? 'in-view' : ''}`}
        >
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
