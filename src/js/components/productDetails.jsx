import React, { Component } from 'react';
import computeProductSection from './helpers/computeproductSection';
class ProductDetails extends Component {
  render() {
    const products = this.props.products;
    const categories = this.props.categories;
    const category = this.props.category;
    
    const productInfo = computeProductSection(categories, category, products, 'productData');

    if (productInfo.length !== 0) {
      return (
        <div>
          <h3>Product Details</h3>
          <ul>
            {productInfo.map((product, idx) => {
              return (
                <singleProduct id={product.id} productName={product.name} isAvailable={product.Availability} price={product.price} />
              )
            })
            }
          </ul>
        </div>
      );
    } else {
      return <p> No product found for this category </p>
    }

  }
}

export default ProductDetails;

const singleProduct = (props) => {
  return (
    <ul key={`product_${product.id}`}>
      <li key={idx}>{props.productName} </li>
      <li key={`price_${idx}`}>Price: ${props.price} </li>
      <li>Availabity: ${props.isAvailable} </li>
    </ul>
  );
}