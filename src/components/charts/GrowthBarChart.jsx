import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const GrowthBarChart = ({ data = [] }) => (
  <div className="h-48">
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#94A3B8" />
        <YAxis stroke="#94A3B8" />
        <Tooltip />
        <Bar dataKey="value" fill="#34D399" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default React.memo(GrowthBarChart)
