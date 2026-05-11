import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PortfolioModal from '../components/PortfolioModal'
import './Portfolio.css'

const categories = ['All', 'Music Video', 'Brand Film', 'Wedding', 'Documentary', 'Social Reel', 'Commercial']

const projects = [
  { id: 1, title: 'Neon Dreams', category: 'Music Video', client: 'SoundWave Records', year: '2024', color: '#ff3c00', duration: '3:42' },
  { id: 2, title: 'Brand Story', category: 'Brand Film', client: 'Apex Brands', year: '2024', color: '#7c3aed', duration: '2:15' },
  { id: 3, title: 'The Journey', category: 'Documentary', client: 'Nova Films', year: '2023', color: '#0ea5e9', duration: '8:30' },
  { id: 4, title: 'Summer Vibes', category: 'Social Reel', client: 'Pulse Media', year: '2024', color: '#10b981', duration: '0:45' },
  { id: 5, title: 'Forever Yours', category: 'Wedding', client: 'Private Client', year: '2024', color: '#f59e0b', duration: '5:20' },
  { id: 6, title: 'Product Launch', category: 'Commercial', client: 'Crest Studios', year: '2023', color: '#ec4899', duration: '1:00' },
  { id: 7, title: 'City Lights', category: 'Music Video', client: 'Orbit Creative', year: '2023', color: '#ff3c00', duration: '4:10' },
  { id: 8, title: 'Our Story', category: 'Brand Film', client: 'Zenith Agency', year: '2024', color: '#7c3aed', duration: '3:00' },
  { id: 9, title: 'Wild Hearts', category: 'Wedding', client: 'Private Client', year: '2024', color: '#f59e0b', duration: '6:15' },
  { id: 10, title: 'Tech Forward', category: 'Commercial', client: 'Spark Digital', year: '2024', color: '#0ea5e9', duration: '1:30' },
  { id: 11, title: 'Voices', category: 'Documentary', client: 'Nova Films', year: '2023', color: '#10b981', duration: '12:00' },
  { id: 12, title: 'Daily Grind', category: 'Social Reel', client: 'Self', year: '2024', color: '#ec4899', duration: '0:30' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [headerRef, headerInView] = useScrollAnimation()
  const [gridRef, gridInView] = useScrollAnimation(0.05)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="page portfolio-page">
      <div className="container">
        <div
          ref={headerRef}
          className={`portfolio-page-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Our Work</p>
          <h1 className="section-title">Portfolio</h1>
          <p className="section-subtitle">
            A curated selection of our best work across every genre and industry.
          </p>
        </div>

        <div className="portfolio-filters" role="tablist" aria-label="Filter portfolio">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className={`portfolio-full-grid animate-fade-up ${gridInView ? 'in-view' : ''}`}
        >
          {filtered.map((p, i) => (
            <div
              className="portfolio-full-card"
              key={p.id}
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
              onClick={() => setSelectedProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedProject(p)}
              aria-label={`View ${p.title}`}
            >
              <div className="portfolio-full-thumb" style={{ '--card-color': p.color }}>
                <div className="portfolio-full-bg"></div>
                <div className="portfolio-full-overlay">
                  <button className="play-btn-sm" aria-label={`Play ${p.title}`} tabIndex={-1}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </button>
                </div>
                {p.duration && <span className="portfolio-duration">{p.duration}</span>}
              </div>
              <div className="portfolio-full-info">
                <div className="portfolio-full-meta">
                  <span className="portfolio-category">{p.category}</span>
                  <span className="portfolio-year">{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="portfolio-client">{p.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  )
}
