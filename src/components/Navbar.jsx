import { FaChartPie, FaHome, FaRegClock } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/timeline', label: 'Timeline', icon: <FaRegClock /> },
  { to: '/stats', label: 'Stats', icon: <FaChartPie /> },
]

export function Navbar() {
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
        </div>
      </nav>
    </header>
  )
}
