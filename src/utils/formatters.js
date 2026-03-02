export const formatCurrency = (v = 0) => {
  return v.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export const percentage = (oldVal = 0, newVal = 0) => {
  if (oldVal === 0) return 100
  return Math.round(((newVal - oldVal) / Math.abs(oldVal)) * 100)
}

export default { formatCurrency, percentage }
