import express from 'express';
import { addProduct, deleteProduct, getProductDetails, getProducts, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/add', addProduct);

router.route('/view-products').get(getProducts);

router.get('/product-details/:id', getProductDetails);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);


export default router;