import { useEffect, useMemo, useState } from 'react'
import { AppContext } from './AppContext.js'

const TIMELINE_KEY = 'keenkeeper-timeline'

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeline, setTimeline] = useState(() => {
    const stored = localStorage.getItem(TIMELINE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const res = await fetch('/friends.json')
        const data = await res.json()
        setTimeout(() => {
          setFriends(data)
          setLoading(false)
        }, 700)
      } catch {
        setLoading(false)
      }
    }
    loadFriends()
  }, [])

  useEffect(() => {
    localStorage.setItem(TIMELINE_KEY, JSON.stringify(timeline))
  }, [timeline])

  const addTimelineEntry = (entry) => {
    setTimeline((prev) => [entry, ...prev])
  }

  const clearTimeline = () => {
    setTimeline([])
  }

  const value = useMemo(
    () => ({ friends, loading, timeline, addTimelineEntry, clearTimeline }),
    [friends, loading, timeline],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
