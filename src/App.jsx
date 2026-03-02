import React from 'react'
import { DashboardProvider } from './context/DashboardContext'
import Overview from './pages/Overview'

const App = () => (
  <DashboardProvider>
    <Overview />
  </DashboardProvider>
)

export default App
