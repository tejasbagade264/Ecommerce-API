const Product = require('../models/productModel');


//create a new entry of product in inventory
module.exports.create=async(req, res) =>{
    try{
     const product = await Product.create(req.body);
     res.status(200).json(product);
 
    }catch(error){
     console.log(error.message);
     res.status(500).json({message: error.message})
    }
 };


 //Show the list of items 
 module.exports.product = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};


//delete the product from inventory

module.exports.delete= async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};


//update the quantity of existing product

module.exports.update= async (req, res) => {
    const productId = req.params.id;
    const newQuantity = req.params.number;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.quantity = newQuantity;
        await product.save();

        res.status(200).json({ message: 'Product quantity updated successfully', updatedProduct: product });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};