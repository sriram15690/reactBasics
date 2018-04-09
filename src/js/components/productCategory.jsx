import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryList extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(id){
        this.props.handleProductDetails(id);
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
       productData.forEach((product) => {
           productNames.push(product.name);
       })
    }else {
        console.log(`No product in ${productData}`);
    }
    return productNames;
}