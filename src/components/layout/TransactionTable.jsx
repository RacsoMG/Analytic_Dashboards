import React from 'react'

const getStatusColor = (status) => {
  if (status === 'Completada') return 'bg-green-500/20 text-green-300'
  if (status === 'Pendiente') return 'bg-yellow-500/20 text-yellow-300'
  if (status === 'Fallida') return 'bg-red-500/20 text-red-300'
  return 'bg-slate-500/20 text-slate-300'
}

const TransactionTable = ({ transactions, searchTerm, onSearch }) => (
  <div>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar por ID, usuario, tipo o estado..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-3 py-2 bg-white/6 border border-white/10 rounded text-slate-400 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
      />
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left border-b border-white/10">
          <tr className="text-slate-300">
            <th className="py-2 px-2">ID</th>
            <th className="py-2 px-2">Usuario</th>
            <th className="py-2 px-2">Tipo</th>
            <th className="py-2 px-2">Monto</th>
            <th className="py-2 px-2">Fecha</th>
            <th className="py-2 px-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((txn) => (
              <tr key={txn.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="py-2 px-2 text-slate-200">{txn.id}</td>
                <td className="py-2 px-2 text-slate-200">{txn.user}</td>
                <td className="py-2 px-2 text-slate-300">{txn.type}</td>
                <td className="py-2 px-2 text-white font-semibold">${txn.amount.toFixed(2)}</td>
                <td className="py-2 px-2 text-slate-400">{txn.date}</td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getStatusColor(txn.status)}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 text-center text-slate-400">
                Sin resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="text-xs text-slate-500 mt-2">Mostrando {transactions.length} transacciones</div>
  </div>
)

export default React.memo(TransactionTable)
