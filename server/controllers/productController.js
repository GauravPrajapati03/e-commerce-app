import Product from "../models/productModel.js";


// add Product -- admin
export const addProduct = async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
}

// View all Products 
export const getProducts = async (req, res) => {
    const products = await Product.find();

    if (!products) {
        return res.status(404).json({ success: false, msg: "Products not found" });
    }

    res.status(200).json({ success: true, msg: "Products fetched successfully", products });
}

// View single Product details
export const getProductDetails = async (req, res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ success: false, msg: "Product not found" });
    }

    res.status(200).json({ success: true, msg: "Product fetched successfully", product });
}

// update Product -- admin

export const updateProduct = async (req, res) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ success: false, msg: "Product not found" });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        msg: "Product updated successfully",
        product
    })
}

// delete Product -- admin

export const deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ success: false, msg: "Product not found" });
    }

    product = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        msg: "Product deleted successfully"
    })

}