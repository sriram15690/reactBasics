$.ajax({
  url: 'http://localhost:3002/productsData',
  success: function(data) {
    console.log(data);
  }
});

$.ajax({
  url: 'http://localhost:3002/products',
  type: 'POST',
  data: {
    name: 'iphone 8',
    price: 7000,
    isAvailable: false
  },
  success: function(data) {
    console.log(data);
  }
});
