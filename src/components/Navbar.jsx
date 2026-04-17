import { FaChartPie, FaHome, FaMoon, FaRegClock, FaSun } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useApp } from '../state/useApp.js'

const links = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/timeline', label: 'Timeline', icon: <FaRegClock /> },
  { to: '/stats', label: 'Stats', icon: <FaChartPie /> },
]

export function Navbar() {
  const { isDark, toggleTheme } = useApp()

  return (
    <header className="navbar-wrap">
      <nav className="container navbar">
        <h1 className="logo" aria-label="KeenKeeper">
          <span className="logo-keen">Keen</span>
          <span className="logo-keeper">Keeper</span>
        </h1>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
          <button type="button" className="ghost-btn theme-toggle-btn" onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
