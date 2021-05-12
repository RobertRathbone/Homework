const productController = require('../controllers/productController');

module.exports = function(app){
    app.get('/api', productController.index);
    app.post('/api/products', productController.createProduct);
    app.get('/api/products', productController.findProducts);
    app.put('/api/product/:id', productController.updateProduct);
    app.delete('/api/product/:id', productController.deleteProduct);

}
