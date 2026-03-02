import { useEffect, useRef } from 'react'

// Generates random data every 3 seconds and calls `onUpdate`
export const useLiveStats = ({ category = 'All', onUpdate }) => {
  const timer = useRef(null)

  useEffect(() => {
    const makePoint = (base = 1000) => ({
      time: new Date().toISOString(),
      value: Math.round(base + Math.random() * base * 0.2 - base * 0.1),
    })

    const makeDistribution = () => {
      return [
        { name: 'North', value: Math.round(Math.random() * 1000) },
        { name: 'South', value: Math.round(Math.random() * 800) },
        { name: 'East', value: Math.round(Math.random() * 600) },
        { name: 'West', value: Math.round(Math.random() * 400) },
      ]
    }

    const tick = () => {
      const base = 1000 + (category === 'Payments' ? 400 : category === 'Users' ? 200 : 0)
      const point = makePoint(base)
      const distribution = makeDistribution()
      onUpdate && onUpdate({ point, distribution })
    }

    // initial
    tick()
    timer.current = setInterval(tick, 3000)
    return () => clearInterval(timer.current)
  }, [category, onUpdate])
}

export default useLiveStats
