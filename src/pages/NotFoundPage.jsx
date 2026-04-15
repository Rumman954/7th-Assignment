import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-space">
      <div className="card not-found">
        <h1>404</h1>
        <p>The page you are trying to visit does not exist.</p>
        <Link className="primary-btn" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
