export default function computeProductSection(categories, category, products, data) {
  const returnedProducts = [];
  let itemID = null;
  if(categories.length !== 0){
      categories.forEach((item) => {  
          if(category == item.name){
              itemID = item.id
              products.forEach((product) => {
                  if(itemID === product.category_id){
                          returnedProducts.push({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              Availability: product.isAvailable
                          })
                  }
              })
          } 
      })
  }
  
  return returnedProducts;
} 