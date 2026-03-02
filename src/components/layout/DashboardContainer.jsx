import React, { useCallback, useEffect } from 'react'
import DashboardLayout from './DashboardLayout'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Card from '../ui/Card'
import TransactionTable from './TransactionTable'
import { useDashboardState, useDashboardDispatch } from '../../context/DashboardContext'
import useLiveStats from '../../hooks/useLiveStats'
import useTransactionSearch from '../../hooks/useTransactionSearch'
import MainAreaChart from '../charts/MainAreaChart'
import DistributionPieChart from '../charts/DistributionPieChart'
import GrowthBarChart from '../charts/GrowthBarChart'
import { formatCurrency } from '../../utils/formatters'

const DashboardContainer = () => {
  const state = useDashboardState()
  const dispatch = useDashboardDispatch()
  const { searchTerm, filtered, handleSearch } = useTransactionSearch()

  const handleUpdate = useCallback(({ point, distribution }) => {
    // Dispatch a dedicated action; reducer handles history windowing
    dispatch({ type: 'ADD_POINT', payload: { point, distribution } })
  }, [dispatch])

  useLiveStats({ category: state.category, onUpdate: handleUpdate })

  useEffect(() => {
    // when category/date changes we could refetch or clear some data
    // smooth transition handled by charts' animations
  }, [state.category, state.dateRange])

  const stats = state.stats || { series: [], distribution: [] }

  const topNumbers = {
    sales: stats.series.reduce((s, p) => s + (p.value || 0), 0),
    activeUsers: Math.max(...(stats.series.map((s) => s.value) || [0])) || 0,
    conversion: Math.round(Math.random() * 100),
    bounce: Math.round(Math.random() * 100),
  }

  return (
    <DashboardLayout
      navbar={<Navbar dateRange={state.dateRange} setDateRange={(r) => dispatch({ type: 'SET_DATE_RANGE', payload: r })} />}
      sidebar={<Sidebar category={state.category} setCategory={(c) => dispatch({ type: 'SET_CATEGORY', payload: c })} />}
    >
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="text-sm text-slate-400">Ventas</div>
          <div className="text-2xl font-bold">{formatCurrency(topNumbers.sales)}</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-400">Usuarios Activos</div>
          <div className="text-2xl font-bold">{topNumbers.activeUsers}</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-400">Conversión</div>
          <div className="text-2xl font-bold">{topNumbers.conversion}%</div>
        </Card>
        <Card>
          <div className="text-sm text-slate-400">Tasa de Rebote</div>
          <div className="text-2xl font-bold">{topNumbers.bounce}%</div>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-transparent p-4 rounded-lg">
          <Card>
            <div className="mb-2 text-slate-300">Tendencia</div>
            <MainAreaChart data={stats.series} />
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <div className="mb-2 text-slate-300">Distribución</div>
            <DistributionPieChart data={stats.distribution} />
          </Card>
          <Card>
            <div className="mb-2 text-slate-300">Crecimiento</div>
            <GrowthBarChart data={stats.distribution} />
          </Card>
        </div>
      </section>

      <section className="mt-6">
        <Card>
          <div className="text-slate-300 mb-4 font-semibold">Transacciones recientes</div>
          <TransactionTable transactions={filtered} searchTerm={searchTerm} onSearch={handleSearch} />
        </Card>
      </section>
    </DashboardLayout>
  )
}

export default DashboardContainer
