import './ViewToggle.css'

function ViewToggle({ viewMode, onViewChange }) {
  return (
    <div className="view-toggle">
      <button
        className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
        onClick={() => onViewChange('list')}
        aria-label="List view"
        title="List View"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="2" rx="1" fill="currentColor"/>
          <rect x="3" y="9" width="14" height="2" rx="1" fill="currentColor"/>
          <rect x="3" y="14" width="14" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>
      <button
        className={`toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
        onClick={() => onViewChange('card')}
        aria-label="Card view"
        title="Card View"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor"/>
          <rect x="11" y="3" width="6" height="6" rx="1" fill="currentColor"/>
          <rect x="3" y="11" width="6" height="6" rx="1" fill="currentColor"/>
          <rect x="11" y="11" width="6" height="6" rx="1" fill="currentColor"/>
        </svg>
      </button>
    </div>
  )
}

export default ViewToggle

