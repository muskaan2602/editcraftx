import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const team = [
  { name: 'Alex Morgan', role: 'Lead Editor & Founder', initials: 'AM', specialty: 'Music Videos & Brand Films' },
  { name: 'Priya Sharma', role: 'Senior Editor', initials: 'PS', specialty: 'Documentaries & Weddings' },
  { name: 'Jordan Lee', role: 'Motion Graphics Artist', initials: 'JL', specialty: 'Animation & VFX' },
  { name: 'Sam Torres', role: 'Color Grading Specialist', initials: 'ST', specialty: 'Cinematic Color' },
]

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every cut, every transition, every color grade is intentional and purposeful.' },
  { icon: '🚀', title: 'Speed', desc: 'We deliver fast without compromising quality. Your deadlines are our deadlines.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We work with you, not just for you. Your vision drives every decision.' },
  { icon: '✨', title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we produce.' },
]

export default function About() {
  const [heroRef, heroInView] = useScrollAnimation(0.1)
  const [storyRef, storyInView] = useScrollAnimation(0.1)
  const [valuesRef, valuesInView] = useScrollAnimation(0.1)
  const [teamRef, teamInView] = useScrollAnimation(0.1)

  return (
    <main className="page about-page">
      <div className="container">

        {/* Hero */}
        <div
          ref={heroRef}
          className={`about-hero animate-fade-up ${heroInView ? 'in-view' : ''}`}
        >
          <p className="section-label">About Us</p>
          <h1 className="section-title">We Are EditCraftX</h1>
          <p className="about-intro">
            A team of passionate video editors, colorists, and motion designers dedicated to transforming raw footage into compelling visual stories. Founded in 2019, we've helped over 50 brands and creators tell their stories through the power of video.
          </p>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className={`about-story animate-fade-up ${storyInView ? 'in-view' : ''}`}
        >
          <div className="about-story-text">
            <p className="section-label">Our Story</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Born from a Passion<br />for Storytelling
            </h2>
            <p>
              EditCraftX started in a small studio with one editor and a big dream — to make professional video editing accessible to every creator and brand, regardless of size.
            </p>
            <p>
              Today, we're a full team of specialists who have worked on everything from indie music videos to major brand campaigns. We've edited content that has collectively garnered over 100 million views.
            </p>
            <p>
              Our philosophy is simple: every frame matters. We treat every project — big or small — with the same level of care, creativity, and commitment.
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
              Work With Us
            </Link>
          </div>
          <div className="about-story-visual">
            <div className="story-card">
              <div className="story-stat">
                <span className="story-number">200+</span>
                <span>Videos Edited</span>
              </div>
              <div className="story-stat">
                <span className="story-number">100M+</span>
                <span>Total Views</span>
              </div>
              <div className="story-stat">
                <span className="story-number">50+</span>
                <span>Happy Clients</span>
              </div>
              <div className="story-stat">
                <span className="story-number">5+</span>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          ref={valuesRef}
          className={`about-values animate-fade-up ${valuesInView ? 'in-view' : ''}`}
        >
          <div className="about-values-header">
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div
          ref={teamRef}
          className={`about-team animate-fade-up ${teamInView ? 'in-view' : ''}`}
        >
          <div className="about-team-header">
            <p className="section-label">The Team</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>Meet the Editors</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <span className="team-specialty">{member.specialty}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
