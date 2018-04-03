import React, {Component} from 'react';
class ProductDetails extends Component {
        render() {
            const products = this.props.products;
            const categories = this.props.categories;
            const category = this.props.category;
            const productName = this.props.productName;
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

            if(productDetails.length !== 0){
                return (
                    <div>
                        { productDetails.map((product, idx) =>{
                            return(
                                <div>
                                    <li key={idx}>{product.name} </li>
                                    <li key={idx + 2}>${product.price} </li>
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