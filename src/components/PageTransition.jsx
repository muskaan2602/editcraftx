import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState('enter') // 'enter' | 'exit'

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setStage('exit')
      const t = setTimeout(() => {
        setDisplayLocation(location)
        setStage('enter')
      }, 300)
      return () => clearTimeout(t)
    }
  }, [location, displayLocation])

  return (
    <div className={`page-transition page-transition--${stage}`}>
      {children}
    </div>
  )
}
