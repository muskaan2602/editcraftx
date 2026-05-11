import { useState } from 'react'
import { useBookings } from '../context/BookingContext'
import './AdminPanel.css'

// NOTE: In production, move auth to a real backend. Never store passwords in client code.
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'editcraftx2024'

const mockProjects = [
  { id: 1, title: 'Neon Dreams', category: 'Music Video', client: 'SoundWave Records', year: '2024', status: 'published' },
  { id: 2, title: 'Brand Story', category: 'Brand Film', client: 'Apex Brands', year: '2024', status: 'published' },
  { id: 3, title: 'The Journey', category: 'Documentary', client: 'Nova Films', year: '2023', status: 'published' },
  { id: 4, title: 'Summer Vibes', category: 'Social Reel', client: 'Pulse Media', year: '2024', status: 'draft' },
  { id: 5, title: 'Forever Yours', category: 'Wedding', client: 'Private Client', year: '2024', status: 'published' },
  { id: 6, title: 'Product Launch', category: 'Commercial', client: 'Crest Studios', year: '2023', status: 'published' },
]

const statusColors = {
  new: '#3b82f6',
  'in-progress': '#f59e0b',
  completed: '#10b981',
  published: '#10b981',
  draft: '#6b7280',
}

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [projects, setProjects] = useState(mockProjects)
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [showAddProject, setShowAddProject] = useState(false)
  const [newProject, setNewProject] = useState({ title: '', category: '', client: '', year: new Date().getFullYear().toString() })

  const { bookings, updateStatus, deleteBooking } = useBookings()

  const handleLogin = e => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthed(true)
      setAuthError('')
    } else {
      setAuthError('Incorrect password. Please try again.')
    }
  }

  const handleUpdateStatus = (id, status) => {
    updateStatus(id, status)
    if (selectedBooking?.id === id) {
      setSelectedBooking(prev => ({ ...prev, status }))
    }
  }

  const handleDeleteBooking = (id) => {
    deleteBooking(id)
    if (selectedBooking?.id === id) setSelectedBooking(null)
  }

  const handleAddProject = (e) => {
    e.preventDefault()
    if (!newProject.title || !newProject.category) return
    setProjects(prev => [...prev, { id: Date.now(), ...newProject, status: 'draft' }])
    setNewProject({ title: '', category: '', client: '', year: new Date().getFullYear().toString() })
    setShowAddProject(false)
  }

  const handleDeleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }

  const toggleProjectStatus = (id) => {
    setProjects(prev => prev.map(p =>
      p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p
    ))
  }

  if (!authed) {
    return (
      <main className="admin-login-page">
        <div className="admin-login-box">
          <div className="admin-login-logo">Edit<span>Craft</span>X</div>
          <h2>Admin Panel</h2>
          <p>Enter your password to access the dashboard.</p>
          <form onSubmit={handleLogin}>
            <div className="admin-form-group">
              <label htmlFor="admin-pass">Password</label>
              <input
                id="admin-pass"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            {authError && <p className="admin-error" role="alert">{authError}</p>}
            <button type="submit" className="btn-primary admin-login-btn">
              Login
            </button>
          </form>
        </div>
      </main>
    )
  }

  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: '📋', color: '#3b82f6' },
    { label: 'New Requests', value: bookings.filter(b => b.status === 'new').length, icon: '🔔', color: '#f59e0b' },
    { label: 'In Progress', value: bookings.filter(b => b.status === 'in-progress').length, icon: '⚡', color: '#8b5cf6' },
    { label: 'Completed', value: bookings.filter(b => b.status === 'completed').length, icon: '✅', color: '#10b981' },
  ]

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'bookings', label: 'Bookings', icon: '📋', badge: bookings.filter(b => b.status === 'new').length },
    { id: 'portfolio', label: 'Portfolio', icon: '🎬' },
  ]

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">Edit<span>Craft</span>X</div>
        <nav className="admin-nav" aria-label="Admin navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`admin-nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="admin-nav-icon">{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.badge > 0 && <span className="admin-nav-badge">{tab.badge}</span>}
            </button>
          ))}
        </nav>
        <button className="admin-logout" onClick={() => setAuthed(false)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="admin-mobile-nav" aria-label="Admin mobile navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-mobile-nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.badge > 0 && <span className="admin-nav-badge">{tab.badge}</span>}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <div className="admin-main">
        <div className="admin-topbar">
          <h1 className="admin-page-title">
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <div className="admin-topbar-right">
            <span className="admin-user-badge">Admin</span>
          </div>
        </div>

        {/* ── Dashboard ── */}
        {activeTab === 'dashboard' && (
          <div className="admin-content">
            <div className="admin-stats">
              {stats.map((s, i) => (
                <div className="admin-stat-card" key={i} style={{ '--stat-color': s.color }}>
                  <div className="admin-stat-icon-wrap">{s.icon}</div>
                  <div>
                    <span className="admin-stat-value">{s.value}</span>
                    <span className="admin-stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="admin-section">
              <div className="admin-section-header">
                <h2>Recent Bookings</h2>
                <button className="admin-text-btn" onClick={() => setActiveTab('bookings')}>View all →</button>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Service</th>
                      <th>Budget</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.slice(0, 5).map(b => (
                      <tr key={b.id} onClick={() => { setSelectedBooking(b); setActiveTab('bookings') }} className="clickable-row">
                        <td>
                          <strong>{b.name}</strong>
                          <span>{b.email}</span>
                        </td>
                        <td>{b.service}</td>
                        <td>{b.budget}</td>
                        <td>{b.date || '—'}</td>
                        <td>
                          <StatusBadge status={b.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── Bookings ── */}
        {activeTab === 'bookings' && (
          <div className="admin-content">
            <div className="bookings-layout">
              <div className="bookings-list">
                {bookings.length === 0 && (
                  <div className="bookings-empty">No bookings yet.</div>
                )}
                {bookings.map(b => (
                  <div
                    key={b.id}
                    className={`booking-item ${selectedBooking?.id === b.id ? 'active' : ''}`}
                    onClick={() => setSelectedBooking(b)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setSelectedBooking(b)}
                  >
                    <div className="booking-item-header">
                      <strong>{b.name}</strong>
                      <StatusBadge status={b.status} />
                    </div>
                    <p>{b.service}</p>
                    <span>{b.email}</span>
                  </div>
                ))}
              </div>

              {selectedBooking ? (
                <div className="booking-detail">
                  <div className="booking-detail-header">
                    <h3>{selectedBooking.name}</h3>
                    <StatusBadge status={selectedBooking.status} />
                  </div>
                  <div className="booking-detail-grid">
                    {[
                      { label: 'Email', value: selectedBooking.email },
                      { label: 'Phone', value: selectedBooking.phone || 'Not provided' },
                      { label: 'Service', value: selectedBooking.service },
                      { label: 'Budget', value: selectedBooking.budget },
                      { label: 'Deadline', value: selectedBooking.deadline || 'Not set' },
                      { label: 'Submitted', value: selectedBooking.date || '—' },
                    ].map(item => (
                      <div className="booking-detail-item" key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="booking-message">
                    <span>Project Details</span>
                    <p>{selectedBooking.message}</p>
                  </div>
                  <div className="booking-actions">
                    <span>Update Status:</span>
                    {['new', 'in-progress', 'completed'].map(s => (
                      <button
                        key={s}
                        className={`status-btn ${selectedBooking.status === s ? 'active' : ''}`}
                        style={{ '--status-color': statusColors[s] }}
                        onClick={() => handleUpdateStatus(selectedBooking.id, s)}
                      >
                        {s}
                      </button>
                    ))}
                    <button
                      className="status-btn danger-btn"
                      onClick={() => handleDeleteBooking(selectedBooking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="booking-empty">
                  <div className="booking-empty-icon">📋</div>
                  <p>Select a booking to view details</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Portfolio ── */}
        {activeTab === 'portfolio' && (
          <div className="admin-content">
            <div className="admin-section">
              <div className="admin-section-header">
                <h2>Portfolio Projects</h2>
                <button className="btn-primary admin-add-btn" onClick={() => setShowAddProject(v => !v)}>
                  {showAddProject ? '✕ Cancel' : '+ Add Project'}
                </button>
              </div>

              {showAddProject && (
                <form className="add-project-form" onSubmit={handleAddProject}>
                  <div className="add-project-fields">
                    <div className="admin-form-group">
                      <label>Title *</label>
                      <input
                        type="text"
                        placeholder="Project title"
                        value={newProject.title}
                        onChange={e => setNewProject(p => ({ ...p, title: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Category *</label>
                      <select
                        value={newProject.category}
                        onChange={e => setNewProject(p => ({ ...p, category: e.target.value }))}
                        required
                      >
                        <option value="">Select category</option>
                        {['Music Video', 'Brand Film', 'Wedding', 'Documentary', 'Social Reel', 'Commercial'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="admin-form-group">
                      <label>Client</label>
                      <input
                        type="text"
                        placeholder="Client name"
                        value={newProject.client}
                        onChange={e => setNewProject(p => ({ ...p, client: e.target.value }))}
                      />
                    </div>
                    <div className="admin-form-group">
                      <label>Year</label>
                      <input
                        type="text"
                        placeholder="2024"
                        value={newProject.year}
                        onChange={e => setNewProject(p => ({ ...p, year: e.target.value }))}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary admin-add-btn">Add Project</button>
                </form>
              )}

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Client</th>
                      <th>Year</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map(p => (
                      <tr key={p.id}>
                        <td><strong>{p.title}</strong></td>
                        <td>{p.category}</td>
                        <td>{p.client}</td>
                        <td>{p.year}</td>
                        <td><StatusBadge status={p.status} /></td>
                        <td>
                          <div className="table-actions">
                            <button
                              className="table-action-btn"
                              onClick={() => toggleProjectStatus(p.id)}
                            >
                              {p.status === 'published' ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                              className="table-action-btn danger"
                              onClick={() => handleDeleteProject(p.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const colors = {
    new: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6', border: 'rgba(59,130,246,0.3)' },
    'in-progress': { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: 'rgba(245,158,11,0.3)' },
    completed: { bg: 'rgba(16,185,129,0.15)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
    published: { bg: 'rgba(16,185,129,0.15)', color: '#10b981', border: 'rgba(16,185,129,0.3)' },
    draft: { bg: 'rgba(107,114,128,0.15)', color: '#9ca3af', border: 'rgba(107,114,128,0.3)' },
  }
  const c = colors[status] || colors.draft
  return (
    <span
      className="status-badge"
      style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
    >
      {status}
    </span>
  )
}
