import './ProductList.css'

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="product-list-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="product-name">{product.name}</td>
              <td className="product-price">${product.price.toFixed(2)}</td>
              <td className="product-category">
                <span className="category-badge">{product.category}</span>
              </td>
              <td className="product-stock">
                <span className={`stock-badge ${product.stock < 20 ? 'low-stock' : ''}`}>
                  {product.stock}
                </span>
              </td>
              <td className="product-description">
                {product.description || <span className="no-description">—</span>}
              </td>
              <td className="product-actions">
                <button
                  className="btn btn-edit"
                  onClick={() => onEdit(product)}
                  aria-label="Edit product"
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(product.id)}
                  aria-label="Delete product"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList

