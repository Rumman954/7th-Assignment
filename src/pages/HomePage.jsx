import { useMemo } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useApp } from '../state/useApp.js'
import { statusClass } from '../utils.js'

const statusPriority = {
  overdue: 0,
  'almost due': 1,
  'on-track': 2,
}

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
    <section className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
        >
          <h3 className="m-0 text-3xl leading-none font-bold text-[#1f5b48]">{item.value}</h3>
          <p className="mt-2 text-sm text-slate-500">{item.title}</p>
        </div>
      ))}
    </section>
  )
}

function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="flex flex-col items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-slate-900 shadow-sm transition hover:shadow"
    >
      <img src={friend.picture} alt={friend.name} className="h-16 w-16 rounded-full object-cover" />
      <h4 className="m-0 text-lg font-semibold">{friend.name}</h4>
      <p className="m-0 text-xs text-slate-500">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${statusClass[friend.status]}`}>
        {friend.status}
      </span>
    </Link>
  )
}

export function HomePage() {
  const { friends, timeline, loading } = useApp()
  const sortedFriends = useMemo(() => {
    return [...friends].sort((a, b) => {
      const aPriority = statusPriority[a.status] ?? Number.MAX_SAFE_INTEGER
      const bPriority = statusPriority[b.status] ?? Number.MAX_SAFE_INTEGER
      const priorityDiff = aPriority - bPriority
      if (priorityDiff !== 0) return priorityDiff
      return b.days_since_contact - a.days_since_contact
    })
  }, [friends])
  return (
    <div className="py-14 md:py-20">
      <section className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="m-0 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-500 md:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button
          className="mt-7 inline-flex h-11 items-center gap-2 rounded-md border border-[#1f5b48] bg-[#1f5b48] px-6 text-sm font-semibold text-white transition hover:bg-[#194b3c]"
          type="button"
        >
          <FaPlus /> Add a Friend
        </button>
      </section>
      {loading ? (
        <section className="mt-10 grid place-items-center gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-[#1f5b48]" />
          <p className="m-0 text-slate-500">Loading your friends...</p>
        </section>
      ) : (
        <>
          <SummaryCards friends={friends} timeline={timeline} />
          <h2 className="mt-9 mb-3 text-3xl font-bold text-slate-900">Your Friends</h2>
          {friends.length === 0 ? (
            <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              No friends found yet. Click <span className="font-semibold text-[#1f5b48]">Add a Friend</span> to
              get started.
            </section>
          ) : (
            <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {sortedFriends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </section>
          )}
        </>
      )}
    </div>
  )
}
