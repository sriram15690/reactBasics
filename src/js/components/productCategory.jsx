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
            // Example oputput
            // const products = ["iphone 7", "Samsung S9"];
            
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
    console.log(productData);

        /* sample Data

        [
          {
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
            "name": "iphone 8",
            "price": "7000",
            "isAvailable": "false",
            "category_id": "1",
            "id": 7
          },
          {
            "name": "iphone 9",
            "price": "7000",
            "isAvailable": "false",
            "category_id": "1",
            "id": 8
          }
        ]
        */
    // Write logic to extract product names from data

    return productNames;
}