import React, { useState, useEffect } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({medicine: '', description: '', price: ''});
  const [submittedProducts, setSubmittedProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || []
  );
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(submittedProducts));
  }, [submittedProducts]);

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedProducts([...submittedProducts, product]);
    setProduct({medicine: '', description: '', price: ''});
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Medicine Name:
          <input type="text" name="medicine" value={product.medicine} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={product.description} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
        <input type="submit" value="Add Product" />
      </form>
      {submittedProducts.map((product, index) => (
        <div key={index}>
          <h2>Submitted Product {index + 1}</h2>
          <p>Medicine Name: {product.medicine}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <div>
        <h2>Cart ({cart.length})</h2>
        {cart.map((product, index) => (
          <div key={index}>
            <p>Medicine Name: {product.medicine}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductForm;
