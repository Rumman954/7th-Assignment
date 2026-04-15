import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'

export function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
