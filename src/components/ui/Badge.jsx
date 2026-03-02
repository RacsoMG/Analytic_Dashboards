import React from 'react'

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs bg-white/6 ${className}`}>{children}</span>
)

export default Badge
