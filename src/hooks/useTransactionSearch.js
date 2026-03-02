import { useState, useMemo, useCallback } from 'react'

// Simulated transaction data
const generateTransactions = (count = 50) => {
  const statuses = ['Completada', 'Pendiente', 'Fallida']
  const types = ['Pago', 'Transferencia', 'Depósito', 'Retiro']
  return Array.from({ length: count }, (_, i) => ({
    id: `TXN-${String(i + 1).padStart(5, '0')}`,
    amount: Math.round(Math.random() * 5000 * 100) / 100,
    type: types[Math.floor(Math.random() * types.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    user: `Usuario ${i + 1}`,
  }))
}

export const useTransactionSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const allTransactions = useMemo(() => generateTransactions(50), [])

  const handleSearch = useCallback((term) => {
    setSearchTerm(term)
    // Debounce: simulate delay
    const timer = setTimeout(() => setDebouncedSearch(term.toLowerCase()), 300)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    if (!debouncedSearch) return allTransactions
    return allTransactions.filter(
      (t) =>
        t.id.toLowerCase().includes(debouncedSearch) ||
        t.user.toLowerCase().includes(debouncedSearch) ||
        t.type.toLowerCase().includes(debouncedSearch) ||
        t.status.toLowerCase().includes(debouncedSearch)
    )
  }, [debouncedSearch, allTransactions])

  return { searchTerm, filtered, handleSearch }
}

export default useTransactionSearch
