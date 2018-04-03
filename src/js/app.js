import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryList from './components/productCategory';
import ProductDetails from './components/productDetails';
import CategoryList from './components/CategoryList';
import { list } from 'postcss';
//import productList from '../css/productList.css';
export default class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        categories: [{
          "id": 1,
          "name": "Mobiles"
        },
        {
          "id": 2,
          "name": "Television"
        }],
        products: [{
          "id": 6,
          "name": "iphone 7",
          "price": 7000,
          "isAvailable": false,
          "category_id": 1
        },
        {
          "id": 1,
          "name": "Samsung S9",
          "price": 1000,
          "isAvailable": true,
          "category_id": 1
        },
        {
          "id": 2,
          "name": "Sony Bravia",
          "price": 7000,
          "isAvailable": false,
          "category_id": 2
        }]
      }
    }
  render() {
    return  (
      <div>
        {/* <CategoryList categories={this.state.categories} /> */}
        {/* <ProductCategoryList category="Mobiles" categories={this.state.categories} products={this.state.products} /> */}
        <ProductDetails category="Mobiles" productName="iphone 7" categories={this.state.categories} products={this.state.products} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));