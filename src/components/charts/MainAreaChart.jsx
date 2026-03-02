import React, { useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const MainAreaChart = ({ data = [] }) => {
  const processed = useMemo(() => {
    return data.map((d) => ({ t: new Date(d.time).toLocaleTimeString(), value: d.value }))
  }, [data])

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={processed}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="t" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#6366F1" fill="url(#grad)" isAnimationActive={true} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default React.memo(MainAreaChart)
