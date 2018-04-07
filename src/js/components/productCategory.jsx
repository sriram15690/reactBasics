import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import computeProductSection from './helpers/computeproductSection';

class ProductCategoryList extends Component {
        render() {
            const products = this.props.products;
            const categories = this.props.categories;
            const category = this.props.category;
            const productCategory = computeProductSection(categories, category, products, 'categoryData');
        
            return (
                <div>
                    <h3>Products by category</h3>
                    {productCategory.map(function(item, idx){
                        return (<li key={idx}>{item}</li>)
                    })}
                </div> 
            )
    }
}

export default ProductCategoryList;
