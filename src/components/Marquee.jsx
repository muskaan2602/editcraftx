import './Marquee.css'

const clients = [
  'SoundWave Records', 'Apex Brands', 'Nova Films', 'Pulse Media',
  'Crest Studios', 'Orbit Creative', 'Zenith Agency', 'Spark Digital',
  'Neon Pictures', 'Vibe Studios', 'Echo Creative', 'Flux Agency',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...clients, ...clients]

  return (
    <div className="marquee-section">
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-inner">
          {items.map((name, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-dot">✦</span>
              <span className="marquee-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
