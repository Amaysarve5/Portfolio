import React from 'react'

const ShowAllButton = ({ showAll, toggle, total }) => {
  return (
    <div className="flex justify-center mt-10 relative z-20">
      <button
        onClick={toggle}
        aria-expanded={showAll}
        className="px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        style={{
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
          color: '#000',
        }}
      >
        {showAll ? 'Show Less' : `Show All (${total})`}
      </button>
    </div>
  )
}

export default ShowAllButton
