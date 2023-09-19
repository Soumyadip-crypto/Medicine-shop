import React, { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({medicine: '', description: '', price: ''});
  const [submittedProducts, setSubmittedProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedProducts([...submittedProducts, product]);
    setProduct({medicine: '', description: '', price: ''});
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
        </div>
      ))}
    </div>
  );
}

export default ProductForm;
