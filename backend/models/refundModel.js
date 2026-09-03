import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
    },

    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
    },

    amount: {
        type: Number,
        required: true,
        min: 0,
    },

    reason: {
        type: String,
        required: true,
        trim: true,
    },

    status: {
        type: String,
        enum: [
            "pending",
            "approved",
            "rejected",
            "processing",
            "completed",
            "failed",
        ],
        default: "pending",
    },

    approvalRequired: {
        type: Boolean,
        default: false,
    },

    approvalStatus: {
        type: String,
        enum: [
            "not_required",
            "pending",
            "approved",
            "rejected",
        ],
        default: "not_required",
    },

    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },

    approvedAt: {
        type: Date,
        default: null,
    },

    refundReference: {
        type: String,
        default: null,
    },

    completedAt: {
        type: Date,
        default: null,
    },
},{timestamps: true})

const Refund = mongoose.model("Refund", refundSchema);
export default Refund;