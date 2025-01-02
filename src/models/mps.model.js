import mongoose from "mongoose";

const mpSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        stateName: {
            type: String,
            required: true,
        },
        constName: {
            type: String,
            required: true,
        },
        mobiles: {
            type: String,
            required: true,
        },
        emails: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)


export const MP = mongoose.model('mps',mpSchema)