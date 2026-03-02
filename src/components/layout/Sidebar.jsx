import React from 'react'

const Sidebar = ({ category, setCategory }) => {
  const categories = ['All', 'Payments', 'Users', 'Errors']
  return (
    <aside className="w-64 p-4">
      <div className="text-slate-300 mb-4">Filtros</div>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">Categoría</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white/6 text-slate-400 px-2 py-2 rounded"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </aside>
  )
}

export default Sidebar
