import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PortfolioModal from '../components/PortfolioModal'
import './PortfolioPreview.css'

const projects = [
  { id: 1, title: 'Neon Dreams', category: 'Music Video', client: 'SoundWave Records', year: '2024', duration: '3:42', color: '#ff3c00' },
  { id: 2, title: 'Brand Story', category: 'Brand Film', client: 'Apex Brands', year: '2024', duration: '2:15', color: '#7c3aed' },
  { id: 3, title: 'The Journey', category: 'Documentary', client: 'Nova Films', year: '2023', duration: '8:30', color: '#0ea5e9' },
  { id: 4, title: 'Summer Vibes', category: 'Social Reel', client: 'Pulse Media', year: '2024', duration: '0:45', color: '#10b981' },
  { id: 5, title: 'Forever Yours', category: 'Wedding', client: 'Private Client', year: '2024', duration: '5:20', color: '#f59e0b' },
  { id: 6, title: 'Product Launch', category: 'Commercial', client: 'Crest Studios', year: '2023', duration: '1:00', color: '#ec4899' },
]

export default function PortfolioPreview() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [headerRef, headerInView] = useScrollAnimation()
  const [gridRef, gridInView] = useScrollAnimation(0.1)

  return (
    <section className="portfolio-preview">
      <div className="container">
        <div
          ref={headerRef}
          className={`portfolio-preview-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <div>
            <p className="section-label">Our Work</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/portfolio" className="btn-outline">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div
          ref={gridRef}
          className={`portfolio-grid animate-fade-up ${gridInView ? 'in-view' : ''}`}
        >
          {projects.map((p, i) => (
            <div
              className="portfolio-card"
              key={p.id}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setSelectedProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedProject(p)}
              aria-label={`View ${p.title}`}
            >
              <div className="portfolio-thumb" style={{ '--card-color': p.color }}>
                <div className="portfolio-thumb-bg"></div>
                <div className="portfolio-play">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <span className="portfolio-duration">{p.duration}</span>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{p.category}</span>
                <h3>{p.title}</h3>
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
    </section>
  )
}
