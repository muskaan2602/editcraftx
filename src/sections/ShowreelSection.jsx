import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './ShowreelSection.css'

export default function ShowreelSection() {
  const [playing, setPlaying] = useState(false)
  const [headerRef, headerInView] = useScrollAnimation()
  const [wrapperRef, wrapperInView] = useScrollAnimation(0.1)

  return (
    <section className="showreel-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`showreel-header animate-fade-up ${headerInView ? 'in-view' : ''}`}
        >
          <p className="section-label">Showreel 2024</p>
          <h2 className="section-title">See Our Best Work</h2>
        </div>

        <div
          ref={wrapperRef}
          className={`showreel-wrapper animate-fade-up ${wrapperInView ? 'in-view' : ''}`}
        >
          {!playing ? (
            <div className="showreel-thumbnail" onClick={() => setPlaying(true)}>
              <div className="showreel-overlay">
                <button className="play-btn" aria-label="Play showreel">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </button>
                <p>Watch Showreel</p>
              </div>
              <div className="showreel-placeholder">
                <div className="showreel-lines">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="showreel-line" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <span className="showreel-label">2024 SHOWREEL</span>
              </div>
            </div>
          ) : (
            <div className="showreel-video">
              {/* Replace src with your actual YouTube embed or video URL */}
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="EditCraftX Showreel 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
