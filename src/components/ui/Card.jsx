import React from 'react'

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export default React.memo(Card)
