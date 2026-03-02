import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#60A5FA', '#34D399', '#FBBF24', '#F87171']

const DistributionPieChart = ({ data = [] }) => (
  <div className="h-48">
    <ResponsiveContainer>
      <PieChart>
        <Pie dataKey="value" data={data} innerRadius={40} outerRadius={70} paddingAngle={4}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

export default React.memo(DistributionPieChart)
