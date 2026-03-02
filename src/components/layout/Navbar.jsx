import React from 'react'
import Badge from '../ui/Badge'

const Navbar = ({ dateRange, setDateRange }) => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <h1 className="text-white text-xl font-semibold">Analytic Dashboard</h1>
        <Badge>Live</Badge>
      </div>
      <div className="flex items-center gap-3">
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="bg-white/6 text-slate-400 px-2 py-1 rounded"
        >
          <option value="24h">Últimas 24h</option>
          <option value="7d">Últimos 7 días</option>
          <option value="30d">Últimos 30 días</option>
        </select>
      </div>
    </header>
  )
}

export default Navbar
