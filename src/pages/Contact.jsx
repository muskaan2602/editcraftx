import { useState } from 'react'
import { useBookings } from '../context/BookingContext'
import './Contact.css'

const services = [
  'Music Video', 'Brand Film', 'Wedding Film', 'Documentary',
  'Social Media Reels', 'Commercial / Ad', 'Short Film', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '', deadline: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { addBooking } = useBookings()

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addBooking(form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '', deadline: '' })
  }

  return (
    <main className="page contact-page">
      <div className="container">
        <div className="contact-header">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">Book Your Project</h1>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you within 24 hours with a custom quote.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3>Contact Details</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@editcraftx.co">hello@editcraftx.co</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <span>Response Time</span>
                  <strong>Within 24 hours</strong>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>What to Expect</h3>
              <ol className="contact-steps">
                <li><span>1</span><p>Submit your project details below</p></li>
                <li><span>2</span><p>We review and send a custom quote</p></li>
                <li><span>3</span><p>Kick-off call to align on vision</p></li>
                <li><span>4</span><p>We edit and deliver your video</p></li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours with a custom quote.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deadline">Project Deadline</label>
                    <input
                      id="deadline"
                      name="deadline"
                      type="date"
                      value={form.deadline}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 – $1,000</option>
                      <option value="1000-3000">$1,000 – $3,000</option>
                      <option value="3000-5000">$3,000 – $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project — what you're creating, your vision, any references, and anything else we should know..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Send Booking Request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
