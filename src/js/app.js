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
        showProductCategoryList : false 
      }
      this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }
  componentDidMount(){
     const _this = this;
      try{
        $.ajax({
          url: 'http://localhost:5000/categories',
          success: function(data) {
            _this.setState({
              categories: data
            })
          }
        });
        $.ajax({
          url: 'http://localhost:5000/products',
          success: function(data) {
            _this.setState({
              products: data
            })
          }
        });
      }catch(error){
        console.log(`${error} fetching Data`);
      }
    }

    handleCategoryClick(e){
      e.preventDefault();
      const selectedCategory = e.target.innerHTML.trim();
      this.setState({
        selectedCategory: selectedCategory,
        showProductCategoryList: true
      });
     
    }
   
  render() {
    if(this.state.categories && this.state.products){
      return  (
        <div>
          <CategoryList handleCategoryList={this.handleCategoryClick} categories={this.state.categories} />
          {this.state.showProductCategoryList ? <ProductCategoryList category={this.state.selectedCategory} categories={this.state.categories} products={this.state.products} /> : null}
          {/* <ProductDetails category="Mobiles" productName="iphone 7" categories={this.state.categories} products={this.state.products} />   */}
        </div>
      );
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('container'));