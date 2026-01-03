import { useState, useEffect, useMemo } from 'react'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import ProductForm from './components/ProductForm'
import SearchBar from './components/SearchBar'
import ViewToggle from './components/ViewToggle'
import Pagination from './components/Pagination'
import './App.css'

// Sample initial products
const initialProducts = [
  {
    id: 1,
    name: 'Laptop Pro 15',
    price: 1299.99,
    category: 'Electronics',
    stock: 45,
    description: 'High-performance laptop with latest processor'
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    category: 'Accessories',
    stock: 120,
    description: 'Ergonomic wireless mouse with long battery life'
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 89.99,
    category: 'Accessories',
    stock: 78,
    description: 'RGB backlit mechanical keyboard'
  },
  {
    id: 4,
    name: 'Monitor 27"',
    price: 349.99,
    category: 'Electronics',
    stock: 32,
    description: '4K UHD monitor with HDR support'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 49.99,
    category: 'Accessories',
    stock: 95,
    description: 'Multi-port USB-C hub with HDMI output'
  },
  {
    id: 6,
    name: 'Webcam HD',
    price: 79.99,
    category: 'Electronics',
    stock: 56,
    description: '1080p HD webcam with auto-focus'
  },
  {
    id: 7,
    name: 'Desk Lamp',
    price: 39.99,
    category: 'Furniture',
    stock: 67,
    description: 'LED desk lamp with adjustable brightness'
  },
  {
    id: 8,
    name: 'Standing Desk',
    price: 499.99,
    category: 'Furniture',
    stock: 15,
    description: 'Electric height-adjustable standing desk'
  }
]

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [viewMode, setViewMode] = useState('list') // 'list' or 'card'
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const itemsPerPage = 6

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products
    }
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [products, searchQuery])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const handleAddProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData
    }
    setProducts([...products, newProduct])
    setIsFormOpen(false)
  }

  const handleEditProduct = (productData) => {
    setProducts(products.map(p => 
      p.id === editingProduct.id ? { ...p, ...productData } : p
    ))
    setEditingProduct(null)
    setIsFormOpen(false)
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
      // Adjust page if needed
      if (paginatedProducts.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  const handleEditClick = (product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Management Dashboard</h1>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setEditingProduct(null)
            setIsFormOpen(true)
          }}
        >
          + Add Product
        </button>
      </header>

      <div className="app-controls">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <ViewToggle 
          viewMode={viewMode}
          onViewChange={setViewMode}
        />
      </div>

      <div className="app-stats">
        <p>Total Products: {filteredProducts.length}</p>
        {searchQuery && (
          <p className="search-results">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        )}
      </div>

      <main className="app-main">
        {paginatedProducts.length === 0 ? (
          <div className="empty-state">
            <p>No products found.</p>
            {searchQuery && (
              <button 
                className="btn btn-secondary"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <>
            {viewMode === 'list' ? (
              <ProductList 
                products={paginatedProducts}
                onEdit={handleEditClick}
                onDelete={handleDeleteProduct}
              />
            ) : (
              <ProductCard 
                products={paginatedProducts}
                onEdit={handleEditClick}
                onDelete={handleDeleteProduct}
              />
            )}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>

      {isFormOpen && (
        <ProductForm
          product={editingProduct}
          onSave={editingProduct ? handleEditProduct : handleAddProduct}
          onClose={handleFormClose}
        />
      )}
    </div>
  )
}

export default App

