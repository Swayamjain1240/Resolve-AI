import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        ticketId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
            default: null,
        },

        action: {
            type: String,
            required: true,
            trim: true,
        },

        performedBy: {
            type: String,
            enum: [
                "customer",
                "admin",
                "ai",
                "system",
            ],
            required: true,
        },

        details: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);


const AuditLog = mongoose.model(
    "AuditLog",
    auditLogSchema
);

export default AuditLog;