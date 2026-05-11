import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

const initialBookings = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '', service: 'Music Video', budget: '$1,000–$3,000', deadline: '2024-06-15', status: 'new', message: 'Need a music video for my new single. Looking for a cinematic style.', date: '2024-05-01' },
  { id: 2, name: 'TechCorp Inc.', email: 'marketing@techcorp.com', phone: '', service: 'Brand Film', budget: '$3,000–$5,000', deadline: '2024-07-01', status: 'in-progress', message: 'Brand story video for our 10th anniversary campaign.', date: '2024-04-28' },
  { id: 3, name: 'Mike & Emma', email: 'mikeemma@gmail.com', phone: '', service: 'Wedding Film', budget: '$500–$1,000', deadline: '2024-08-20', status: 'completed', message: 'Wedding highlight reel, 3–5 minutes.', date: '2024-04-15' },
  { id: 4, name: 'Pulse Agency', email: 'hello@pulse.co', phone: '', service: 'Social Reel', budget: 'Under $500', deadline: '2024-05-30', status: 'new', message: '5 Instagram reels for our product launch.', date: '2024-05-08' },
]

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(initialBookings)

  const addBooking = (formData) => {
    const newBooking = {
      id: Date.now(),
      ...formData,
      status: 'new',
      date: new Date().toISOString().split('T')[0],
    }
    setBookings(prev => [newBooking, ...prev])
  }

  const updateStatus = (id, status) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b))
  }

  const deleteBooking = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateStatus, deleteBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBookings() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBookings must be used within BookingProvider')
  return ctx
}
