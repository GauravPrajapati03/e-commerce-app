import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        maxLength: [100000, 'Price cannot exceed 100000'],
        min: [0, 'Price cannot be negative'],
        default: 0.0
    },
    rating: {
        type: Number,
        default: 0.0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Product category is required'],
    },
    stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        default: 0,
        maxLen: [4, 'Stock cannot exceed 4 digits']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: [true, 'Reviewer name is required']
        },
        rating: {
            type: Number,
            required: [true, 'Rating is required'],
        },
        comment: {
            type: String,
            required: [true, 'Comment is required']
        }
    }],
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

export default Product;