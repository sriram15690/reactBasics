import React, { Component } from 'react';
import computeProductSection from './helpers/computeproductSection';
class ProductDetails extends Component {
  render() {
    const products = this.props.products;
    const categories = this.props.categories;
    const category = this.props.category;
    const productName = this.props.productName;
    
    const productInfo = computeProductSection(categories, category, products, 'productData');

    if (productInfo.length !== 0) {
      return (
        <div>
          <h3>Single Product Details</h3>
          <div>
            {productInfo.map((product, idx) => {
              if(product.name === productName){
                return (
                  <SingleProduct key={product.id} productName={product.name} isAvailable={product.Availability.toString()} price={product.price} />
                )
              }
            })
            }
          </div>
        </div>
      );
    } else {
      return <p> No product found for this category </p>
    }
  }
}

export default ProductDetails;

const SingleProduct = (props) => {
  return (
    <ul>
      <li >{props.productName} </li>
      <li >Price: ${props.price} </li>
      <li >Availability:{props.isAvailable} </li>
    </ul>
  );
}