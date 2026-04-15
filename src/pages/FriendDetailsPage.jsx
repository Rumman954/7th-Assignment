import { FaEdit, FaPhone, FaRegTrashAlt, FaSms, FaVideo } from 'react-icons/fa'
import { MdArchive, MdSnooze } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useApp } from '../state/useApp.js'
import { statusClass, toDate } from '../utils.js'

export function FriendDetailsPage() {
  const { id } = useParams()
  const { friends, addTimelineEntry } = useApp()
  const friend = friends.find((item) => item.id === Number(id))

  if (!friend) return <div className="card page-space">Friend not found.</div>

  const addEntry = (type) => {
    const title = `${type[0].toUpperCase()}${type.slice(1)} with ${friend.name}`
    addTimelineEntry({
      id: Date.now(),
      type,
      title,
      date: new Date().toISOString(),
    })
    toast.success(`${title} added to timeline`)
  }

  return (
    <div className="details-grid page-space">
      <section>
        <div className="card friend-profile">
          <img src={friend.picture} alt={friend.name} className="avatar" />
          <h2>{friend.name}</h2>
          <span className={`status-pill ${statusClass[friend.status]}`}>{friend.status}</span>
          <div className="tags-wrap">
            {friend.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="friend-bio">"{friend.bio.split('.')[0]}"</p>
          <p className="friend-email">Preferred: email</p>
        </div>
        <div className="action-column stacked">
          <button className="ghost-btn action-btn" type="button">
            <MdSnooze /> Snooze 2 Weeks
          </button>
          <button className="ghost-btn action-btn" type="button">
            <MdArchive /> Archive
          </button>
          <button className="ghost-btn action-btn danger" type="button">
            <FaRegTrashAlt /> Delete
          </button>
        </div>
      </section>

      <section className="right-column">
        <div className="summary-grid three">
          <div className="card summary-card details-stat">
            <h3>{friend.days_since_contact}</h3>
            <p>Days Since Contact</p>
          </div>
          <div className="card summary-card details-stat">
            <h3>{friend.goal}</h3>
            <p>Goal (Days)</p>
          </div>
          <div className="card summary-card details-stat">
            <h3>{toDate(friend.next_due_date)}</h3>
            <p>Next Due</p>
          </div>
        </div>

        <div className="card relationship-card">
          <div className="relationship-head">
            <h3>Relationship Goal</h3>
            <button className="ghost-btn edit-mini" type="button">
              <FaEdit /> Edit
            </button>
          </div>
          <p>
            Connect every <strong>{friend.goal} days</strong>
          </p>
        </div>

        <div className="card checkin-card">
          <h3>Quick Check-In</h3>
          <div className="quick-row">
            <button className="ghost-btn checkin-btn" onClick={() => addEntry('call')} type="button">
              <FaPhone /> Call
            </button>
            <button className="ghost-btn checkin-btn" onClick={() => addEntry('text')} type="button">
              <FaSms /> Text
            </button>
            <button className="ghost-btn checkin-btn" onClick={() => addEntry('video')} type="button">
              <FaVideo /> Video
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
