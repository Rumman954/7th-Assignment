export const statusClass = {
  overdue: 'status-overdue',
  'almost due': 'status-almost',
  'on-track': 'status-track',
}

export const methodIcon = {
  call: '📞',
  text: '💬',
  video: '🎥',
}

export const toDate = (raw) =>
  new Date(raw).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
