import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Industries.css'

const industries = [
  {
    icon: '🎵',
    title: 'Music & Entertainment',
    desc: 'Music videos, lyric videos, concert films, and artist promos that capture the energy of your sound.',
    tags: ['Music Videos', 'Lyric Videos', 'Concert Films'],
  },
  {
    icon: '🏢',
    title: 'Corporate & Brand',
    desc: 'Brand films, product launches, testimonials, and internal communications that build trust.',
    tags: ['Brand Films', 'Testimonials', 'Product Demos'],
  },
  {
    icon: '💍',
    title: 'Weddings & Events',
    desc: 'Cinematic wedding films and event highlights that preserve your most precious memories forever.',
    tags: ['Wedding Films', 'Event Highlights', 'Same-Day Edits'],
  },
  {
    icon: '📱',
    title: 'Social Media & Content',
    desc: 'Short-form reels, YouTube videos, and platform-optimized content that grows your audience.',
    tags: ['Instagram Reels', 'YouTube', 'TikTok'],
  },
  {
    icon: '🎬',
    title: 'Film & Documentary',
    desc: 'Long-form documentary editing, short films, and narrative storytelling with cinematic precision.',
    tags: ['Documentaries', 'Short Films', 'Narratives'],
  },
  {
    icon: '🛍️',
    title: 'E-Commerce & Ads',
    desc: 'High-converting product videos, ad creatives, and explainer videos that drive sales.',
    tags: ['Product Videos', 'Ad Creatives', 'Explainers'],
  },
]

export default function Industries() {
  const [headerRef, headerInView] = useScrollAnimation()
  const [gridRef, gridInView] = useScrollAnimation(0.1)

  return (
    <section className="industries-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`industries-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Industries</p>
          <h2 className="section-title">We Work Across<br />Every Industry</h2>
          <p className="section-subtitle">
            From music to corporate, weddings to social media — our editors are specialists in every genre.
          </p>
        </div>

        <div ref={gridRef} className={`industries-grid animate-fade-up ${gridInView ? 'in-view' : ''}`}>
          {industries.map((ind, i) => (
            <div className="industry-card" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <div className="industry-tags">
                {ind.tags.map(tag => (
                  <span key={tag} className="industry-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
