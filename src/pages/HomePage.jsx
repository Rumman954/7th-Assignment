import { FaPlus } from 'react-icons/fa'
import { useApp } from '../state/useApp.js'

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

export function HomePage() {
  const { friends, timeline } = useApp()

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
      <SummaryCards friends={friends} timeline={timeline} />
    </div>
  )
}
