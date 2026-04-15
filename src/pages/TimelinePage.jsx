import { useMemo, useState } from 'react'
import { useApp } from '../state/useApp.js'
import { methodIcon, toDate } from '../utils.js'

export function TimelinePage() {
  const { timeline } = useApp()
  const [filter, setFilter] = useState('all')

  const entries = useMemo(() => {
    if (filter === 'all') return timeline
    return timeline.filter((entry) => entry.type === filter)
  }, [filter, timeline])

  return (
    <section className="page-space">
      <div className="card timeline-head">
        <h1>Timeline</h1>
        <div className="filter-row">
          {['all', 'call', 'text', 'video'].map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? 'ghost-btn active' : 'ghost-btn'}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-list">
        {entries.length === 0 ? (
          <div className="card">No interactions logged yet.</div>
        ) : (
          entries.map((entry) => (
            <article key={entry.id} className="card timeline-item">
              <p>{toDate(entry.date)}</p>
              <span>{methodIcon[entry.type]}</span>
              <h4>{entry.title}</h4>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
