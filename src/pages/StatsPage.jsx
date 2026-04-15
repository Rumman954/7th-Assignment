import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { useApp } from '../state/useApp.js'

const COLORS = {
  Text: '#7c3aed',
  Call: '#1f5b48',
  Video: '#2faf78',
}

export function StatsPage() {
  const { timeline } = useApp()
  const data = [
    { name: 'Text', value: timeline.filter((t) => t.type === 'text').length },
    { name: 'Call', value: timeline.filter((t) => t.type === 'call').length },
    { name: 'Video', value: timeline.filter((t) => t.type === 'video').length },
  ].map((item) => ({ ...item, value: item.value || 1 }))

  return (
    <section className="page-space stats-page">
      <h1 className="stats-title">Friendship Analytics</h1>
      <div className="card stats-card">
        <p className="stats-subtitle">By Interaction Type</p>
        <div className="chart-wrap stats-chart">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={210}
                endAngle={-150}
                innerRadius={54}
                outerRadius={76}
                paddingAngle={4}
                cornerRadius={6}
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="stats-legend">
          {data.map((item) => (
            <span key={item.name}>
              <i style={{ backgroundColor: COLORS[item.name] }} />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
