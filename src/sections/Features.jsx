import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Features.css'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'Cinematic Editing',
    desc: 'Professional color grading, seamless cuts, and motion graphics that elevate your footage to cinematic quality.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: '48–72 hour delivery for most projects. Rush delivery available. We respect your deadlines.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Unlimited Revisions',
    desc: "We work until you're 100% satisfied. Unlimited revision rounds included in every package.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Dedicated Editor',
    desc: 'One dedicated editor assigned to your project for consistent style and deep understanding of your brand.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Multi-Platform Ready',
    desc: 'Optimized exports for YouTube, Instagram, TikTok, LinkedIn, and broadcast — all in one package.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Sound Design',
    desc: 'Professional audio mixing, sound effects, and music licensing to make your video sound as good as it looks.',
  },
]

export default function Features() {
  const [headerRef, headerInView] = useScrollAnimation()
  const [gridRef, gridInView] = useScrollAnimation(0.1)

  return (
    <section className="features-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`features-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Everything You Need<br />in One Place</h2>
          <p className="section-subtitle">
            We combine technical expertise with creative vision to deliver videos that stand out and drive results.
          </p>
        </div>

        <div ref={gridRef} className={`features-grid animate-fade-up ${gridInView ? 'in-view' : ''}`}>
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
