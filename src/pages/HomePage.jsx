import { FaPlus } from 'react-icons/fa'

export function HomePage() {
  return (
    <div className="page-space">
      <section className="banner card">
        <h1>Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button className="primary-btn" type="button">
          <FaPlus /> Add a Friend
        </button>
      </section>
    </div>
  )
}
