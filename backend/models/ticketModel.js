import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        enum: [
            "refund",
            "replacement",
            "damaged_product",
            "wrong_product",
            "missing_delivery",
            "payment_issue",
            "order_status",
            "other",
        ],
        default: "other",
    },

    priority: {
        type: String,
        enum: [
            "low",
            "medium",
            "high",
        ],
        default: "medium",
    },

    status: {
        type: String,
        enum: [
            "open",
            "investigating",
            "waiting_for_approval",
            "action_in_progress",
            "resolved",
            "closed",
            "reopened",
        ],
        default: "open",
    },

    aiInvestigationStatus: {
        type: String,
        enum: [
            "not_started",
            "running",
            "completed",
            "failed",
        ],
        default: "not_started",
    },

    resolution: {
        action: {
            type: String,
            enum: [
                "none",
                "refund",
                "replacement",
                "information",
            ],
            default: "none",
        },

        summary: {
            type: String,
            default: "",
        },
    },

    resolvedAt: {
        type: Date,
        default: null,
    },

    closedAt: {
        type: Date,
        default: null,
    },
},{timestamps: true})

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;