import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    items: [
        {
            productName: {
                type: String,
                required: true,
            },
            sku: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            price: {
                type: Number,
                required: true,
                min: 0,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    orderStatus: {
        type: String,
        enum: [
            "placed",
            "shipped",
            "delivered",
            "cancelled",
        ],
        default: "placed",
    },

    paymentStatus: {
        type: String,
        enum: [
            "pending",
            "paid",
            "failed",
            "refunded",
            "partially_refunded",
        ],
        default: "pending",
    },

    deliveredAt: {
        type: Date,
        default: null,
    },

},{timeStamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;