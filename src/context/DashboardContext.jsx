import React, { createContext, useReducer, useContext } from 'react'

const DashboardStateContext = createContext()
const DashboardDispatchContext = createContext()

const initialState = {
  category: 'All',
  dateRange: '24h',
  stats: {
    series: [],
    distribution: [],
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload }
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload }
    case 'SET_STATS':
      return { ...state, stats: action.payload }
    case 'ADD_POINT': {
      // payload: { point, distribution }
      const existing = state.stats.series || []
      const nextSeries = [...existing, action.payload.point].slice(-30)
      return { ...state, stats: { series: nextSeries, distribution: action.payload.distribution } }
    }
    default:
      return state
  }
}

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DashboardDispatchContext.Provider value={dispatch}>
      <DashboardStateContext.Provider value={state}>{children}</DashboardStateContext.Provider>
    </DashboardDispatchContext.Provider>
  )
}

export const useDashboardState = () => useContext(DashboardStateContext)
export const useDashboardDispatch = () => useContext(DashboardDispatchContext)

export default DashboardProvider
