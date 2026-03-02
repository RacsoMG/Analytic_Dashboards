import React from 'react'

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
