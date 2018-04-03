import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class ProductCategoryList extends Component {
        render() {
            const products = this.props.products;
            const categories = this.props.categories;
            const category = this.props.category;
            const returnedProducts = [];
            let itemID = null;            
            categories.forEach((item) => {
                if(category == item.name){
                    itemID = item.id;
                    products.forEach((product) => {
                        if(itemID === product.category_id){
                            returnedProducts.push(product.name);
                        }
                    })
                } 
            })

            return (
                <div>
                 {returnedProducts.map(function(item, idx){
                        return (<li key={idx}>{item}</li>)
                    })}
                </div> 
            )
        
    

    }
}

export default ProductCategoryList;
