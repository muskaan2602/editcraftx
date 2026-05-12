import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminPanel from './pages/AdminPanel'
import NotFound from './pages/NotFound'
import { BookingProvider } from './context/BookingContext'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Hide footer on admin page
function Layout() {
  const { pathname } = useLocation()
  const isAdmin = pathname === '/admin'

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdmin && <Footer />}
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </BookingProvider>
    </ThemeProvider>
  )
}

export default App
