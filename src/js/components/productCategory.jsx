import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryList extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(name){
        console.log(this.props);
        console.log(name);
        if(name == 'iphone 7') {
            this.props.products[1].price ="1000000";    
        }
        
        this.props.handleProductDetails(name);
      }
        render() {
            const products = getProductNames(this.props.products);
            
            return (
                <div>
                    <h3>Products by category</h3>
                    {products.map((name, idx) => {
                        return <li onClick={this.handleClick.bind(this, name)} key={idx}>{name}</li>
                    })}
                </div> 
            )
    }
}

export default ProductCategoryList;

function getProductNames(productData) {
    let productNames = [];
    if(productData.length !== 0){
       productNames = productData.map((product) => product.name);
    }else {
        console.log(`No product in ${productData}`);
    }
    return productNames;
}