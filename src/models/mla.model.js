import mongoose, {Schema} from "mongoose";

const mlaSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        stateName: {
            type: String,
            required: true,
        },
        constituencyName: {
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
    {timestamps:true}
)

export const MLA = mongoose.model("MLA",mlaSchema)