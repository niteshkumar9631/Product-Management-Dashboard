import './ProductCard.css'

function ProductCard({ products, onEdit, onDelete }) {
  return (
    <div className="product-card-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="card-header">
            <h3 className="card-title">{product.name}</h3>
            <span className="category-badge">{product.category}</span>
          </div>
          <div className="card-body">
            <div className="card-price">${product.price.toFixed(2)}</div>
            <div className="card-stock">
              <span className={`stock-badge ${product.stock < 20 ? 'low-stock' : ''}`}>
                Stock: {product.stock}
              </span>
            </div>
            {product.description && (
              <p className="card-description">{product.description}</p>
            )}
          </div>
          <div className="card-actions">
            <button
              className="btn btn-edit"
              onClick={() => onEdit(product)}
            >
              Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard

