import mongoose, {Schema} from "mongoose";

const mcpSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        stateName: {
            type: String,
            required: true,
        },
        wardName: {
            type: String,
            required: true,
        },
        wardNumber: {
            type:String,
            required:true,
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

export const MCP = mongoose.model('MCP',mcpSchema)