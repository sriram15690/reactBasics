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
        products: []
      }
    }
  componentWillMount(){
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
  
  render() {
    if(this.state.categories && this.state.products){
      return  (
        <div>
          <CategoryList categories={this.state.categories} />
          <ProductCategoryList category="Television" categories={this.state.categories} products={this.state.products} />
          {/* <ProductDetails category="Mobiles" productName="iphone 7" categories={this.state.categories} products={this.state.products} /> */}
        </div>
      );
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('container'));