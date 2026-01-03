import { useState, useEffect } from 'react'
import './SearchBar.css'

function SearchBar({ searchQuery, onSearchChange }) {
  const [inputValue, setInputValue] = useState(searchQuery)

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue)
    }, 500) // 500ms debounce

    return () => clearTimeout(timer)
  }, [inputValue, onSearchChange])

  useEffect(() => {
    setInputValue(searchQuery)
  }, [searchQuery])

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products by name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
      {inputValue && (
        <button
          className="search-clear"
          onClick={() => setInputValue('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar

