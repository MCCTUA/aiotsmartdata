import React from 'react'
import { HashRouter, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollDots from './components/ScrollDots.jsx'
import PresViewer from './components/PresViewer.jsx'
import Home from './Home.jsx'

// PresLayer reads the hash route (#/pres/:id). The main page (<Home/>) is
// always mounted underneath, so closing the overlay returns the user to the
// exact scroll position they left — no manual scroll bookkeeping needed.
function PresLayer() {
  const { pathname } = useLocation()
  const match = pathname.match(/^\/pres\/([\w-]+)/)
  const id = match ? match[1] : null
  return id ? <PresViewer id={id} /> : null
}

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <ScrollDots />
      <Home />
      <Footer />
      <PresLayer />
    </HashRouter>
  )
}
