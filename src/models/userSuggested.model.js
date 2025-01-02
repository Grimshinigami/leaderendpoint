import mongoose, {Schema} from "mongoose";
import { type } from "os";

const userSchema = new Schema(
    {
        mlaId: {
            type: Schema.Types.ObjectId,
        },
        mpsId: {
            type: Schema.Types.ObjectId,
        },
        mcpId: {
            type: Schema.Types.ObjectId,
        },
        phone: {
            type: String,
        },
        email: {
            type: String
        }
    },
    {timestamps:true}
)

export const UserSuggested = mongoose.model("Usersuggested",userSchema)