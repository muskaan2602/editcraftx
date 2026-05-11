import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioModal.css'

export default function PortfolioModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Video preview area */}
        <div className="modal-thumb" style={{ '--card-color': project.color }}>
          <div className="modal-thumb-bg"></div>
          <div className="modal-play-area">
            <button className="modal-play-btn" aria-label="Play video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
            <p>Click to play</p>
          </div>
          <div className="modal-thumb-label">{project.title}</div>
        </div>

        {/* Info */}
        <div className="modal-info">
          <div className="modal-meta">
            <span className="modal-category">{project.category}</span>
            <span className="modal-year">{project.year}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-client">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
            {project.client}
          </p>
          <p className="modal-desc">
            {project.desc || `A ${project.category.toLowerCase()} project crafted with precision and creative vision. Every frame was intentionally designed to tell a compelling story and deliver results for our client.`}
          </p>

          <div className="modal-details">
            {project.duration && (
              <div className="modal-detail-item">
                <span>Duration</span>
                <strong>{project.duration}</strong>
              </div>
            )}
            <div className="modal-detail-item">
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>
            <div className="modal-detail-item">
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
            <div className="modal-detail-item">
              <span>Client</span>
              <strong>{project.client}</strong>
            </div>
          </div>

          <Link to="/contact" className="btn-primary modal-cta" onClick={onClose}>
            Book a Similar Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
