import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useApp } from '../state/useApp.js'
import { statusClass } from '../utils.js'

function SummaryCards({ friends, timeline }) {
  const overdue = friends.filter((f) => f.status === 'overdue').length
  const almostDue = friends.filter((f) => f.status === 'almost due').length
  const onTrack = friends.filter((f) => f.status === 'on-track').length

  const items = [
    { title: 'Total Friends', value: friends.length },
    { title: 'On Track', value: onTrack },
    { title: 'Need Attention', value: overdue + almostDue },
    { title: 'Interactions This Month', value: timeline.length },
  ]

  return (
    <section className="summary-grid">
      {items.map((item) => (
        <div key={item.title} className="card summary-card">
          <p>{item.title}</p>
          <h3>{item.value}</h3>
        </div>
      ))}
    </section>
  )
}

function FriendCard({ friend }) {
  return (
    <Link to={`/friend/${friend.id}`} className="card friend-card">
      <img src={friend.picture} alt={friend.name} className="avatar" />
      <h4>{friend.name}</h4>
      <p>{friend.days_since_contact}d ago</p>
      <div className="tags-wrap">
        {friend.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <span className={`status-pill ${statusClass[friend.status]}`}>{friend.status}</span>
    </Link>
  )
}

export function HomePage() {
  const { friends, timeline, loading } = useApp()

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

      {loading ? (
        <section className="loader-wrap card">
          <div className="loader" />
          <p>Loading your friends...</p>
        </section>
      ) : (
        <>
          <SummaryCards friends={friends} timeline={timeline} />
          <h2 className="section-title">Your Friends</h2>
          <section className="friends-grid">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </section>
        </>
      )}
    </div>
  )
}
