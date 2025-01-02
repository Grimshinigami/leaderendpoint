import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { UserSuggested } from '../models/userSuggested.model.js';

const insertSuggested = asyncHandler(async (req,res) => {

    const {mlaId, mcpId, mpId} = req.params

    if(!mlaId || !mcpId || !mpId){
        throw new ApiError(400,'Valid mlaId or mcpId or mpId required')
    }

    const inserted = await UserSuggested.insertMany(data)
        
    if(!inserted){
        throw new ApiError(400, "Error in inserting data")
    }

    return res
            .status(200)
            .json(new ApiResponse(200,{},"Data Successfully Inserted"))
    

})

const searchUserSuggested = asyncHandler( async(req, res) => {

    const {constituency, limit="10",page="1", sort="createdAt", sortType="1"} = req.query;

    if(!constituency || constituency?.trim()==''){
        throw new ApiError(400, "Valid constituency name required")
    }

    const results = await UserSuggested.find({constName:{$regex: constituency, $options: 'i'}})

    if(!results){
        throw new ApiError(500, "Some Error Occured")
    }

    return res
            .status(200)
            .json(new ApiResponse(200,{results},"Database Checked"))

})

export {
    insertSuggested,
    searchUserSuggested
}