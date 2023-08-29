const express=require('express');
const router= express.Router();

const APIcontroller=require('../controllers/api_controller');

router.get('/product',APIcontroller.product);
router.post('/product/create', APIcontroller.create);
router.delete('/product/:id', APIcontroller.delete);
router.put('/products/:id/update_quantity/:number', APIcontroller.update);

module.exports = router;