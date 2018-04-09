import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryList from './components/productCategory';
import ProductDetails from './components/productDetails';
import CategoryList from './components/CategoryList';
import $ from 'jquery';

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        categories: [],
        products: [],
        selectedCategory: null,
        selectedProduct: null,
        showProductDetails: false,
        showProductCategoryList : false 
      }
      this.handleCategoryClick = this.handleCategoryClick.bind(this);
      this.handleProductDetails = this.handleProductDetails.bind(this);
    }
  componentDidMount(){
     const _this = this;
      try{
        $.ajax({
          url: 'http://localhost:5000/categories',
          success: function(data) {
            // this is ajax
            _this.setState({
              categories: data
            })
          }
        });
      }catch(error){
        console.log(`${error} fetching category Data`);
      }
    }

    handleCategoryClick(name, id){
       const _this = this;
      $.ajax({
        url: 'http://localhost:5000/products?category_id='+ id,
        success: function(data) {
          _this.setState({
            products: data,
            selectedCategory: name,
            showProductCategoryList: true
          })
        }
      });  
    }

    handleProductDetails(name){
      this.setState({
        selectedProduct: name,
        showProductDetails: true
      })
    }
   
  render() {
    if(this.state.categories && this.state.products){
      return  (
        <div>
          <CategoryList handleCategoryList={this.handleCategoryClick} categories={this.state.categories} />
          {this.state.showProductCategoryList ? <ProductCategoryList productDetails={this.handleProductDetails} category={this.state.selectedCategory} categories={this.state.categories} products={this.state.products} /> : null}
          {this.state.showProductCategoryList && this.state.showProductDetails ? <ProductDetails category={this.state.selectedCategory} productName={this.state.selectedProduct} categories={this.state.categories} products={this.state.products} /> : null}
        </div>
      );
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('container'));