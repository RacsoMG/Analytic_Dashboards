import React from 'react'

const DashboardLayout = ({ sidebar, navbar, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {navbar}
      <div className="flex">
        <div className="hidden md:block">{sidebar}</div>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
