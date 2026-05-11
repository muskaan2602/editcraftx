import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'per video',
    desc: 'Perfect for social media content and short-form videos.',
    features: [
      'Up to 3 minutes edited',
      'Basic color grading',
      'Music sync',
      '2 revision rounds',
      '72-hour delivery',
      'HD export (1080p)',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$799',
    period: 'per video',
    desc: 'Our most popular plan for brand films and music videos.',
    features: [
      'Up to 10 minutes edited',
      'Advanced color grading',
      'Motion graphics & titles',
      'Sound design & mixing',
      'Unlimited revisions',
      '48-hour delivery',
      '4K export',
      'Multi-platform versions',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    desc: 'For large-scale productions, documentaries, and ongoing work.',
    features: [
      'Unlimited length',
      'Full post-production suite',
      'VFX & compositing',
      'Dedicated project manager',
      'Priority support',
      'Same-day rush available',
      'Raw file delivery',
      'Monthly retainer options',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
]

export default function Pricing() {
  const [headerRef, headerInView] = useScrollAnimation()
  const [gridRef, gridInView] = useScrollAnimation(0.1)

  return (
    <section className="pricing-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`pricing-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. Just great video editing at a fair price.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`pricing-grid animate-fade-up ${gridInView ? 'in-view' : ''}`}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.highlight && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-card-top">
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f, fi) => (
                  <li key={fi}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={plan.highlight ? 'btn-primary pricing-cta' : 'btn-outline pricing-cta'}
              >
                {plan.cta === 'Most Popular' ? 'Get Started' : plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          All prices are starting rates. Final quote depends on project complexity and length.
          <Link to="/contact"> Get a custom quote →</Link>
        </p>
      </div>
    </section>
  )
}
