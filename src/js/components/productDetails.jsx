import React, {Component} from 'react';

function computeProductDetails(categories, category, products) {
    const productDetails = [];
    let itemID = null;  
    categories.forEach((item) => {
        if(category == item.name){
            itemID = item.id;
            products.forEach((product) => {
                if(itemID === product.category_id){
                    productDetails.push({
                        name: product.name,
                        price: product.price,
                        Availability: product.isAvailable
                    });
                }
            })
        } 
    })
    return productDetails;
}
class ProductDetails extends Component {
        render() {
            const products = this.props.products;
            const categories = this.props.categories;
            const category = this.props.category;
            const productName = this.props.productName;
            const productInfo = computeProductDetails(categories, category, products);

            if(productInfo.length !== 0){
                return (
                    <div>
                        { productInfo.map((product, idx) =>{
                            return(
                                <div>
                                    <li key={idx}>{product.name} </li>
                                    <li key={idx + 2}>Price: ${product.price} </li>
                                </div>
                            ); 
                            }) 
                        }
                    </div>
                );
            }
    }
}

export default ProductDetails;