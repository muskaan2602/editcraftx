import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="page notfound-page">
      <div className="container notfound-content">
        <div className="notfound-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
        </div>
      </div>
    </main>
  )
}
